import { NextFunction, Response } from "express";
import { validationResult } from "express-validator";
import errorCode from "../errors/errorCode";
import generalError from "../errors/generalError";
import { reqWithUser } from "../interfaces/interfaces";
import Requirements from "../models/Requirements";
import db from "../util/database";

const resetRequirementsConstraintOnError = async () => {
  const sequenceColumn = "requirements_id_seq";
  const tableName = "requirements";
  const columnName = "id";
  const [[{ max }]] = await db.query(
    `SELECT MAX("${columnName}") AS max FROM public."${tableName}";`,
  );
  // Set the autoincrement current value to highest value + 1
  await db.query(
    `ALTER SEQUENCE public."${sequenceColumn}" RESTART WITH ${+max + 1};`,
  );
};

export const getRequirementForUser = async (
  req: reqWithUser,
  res: Response,
  next: NextFunction,
) => {
  const userId = req.userId;
  try {
    const userRequirement = await Requirements.findOne({
      where: { userId: userId },
      attributes: {
        exclude: ["id", "userId", "createdAt", "updatedAt"],
      },
    });
    let message = "No requirements found for user";
    let data = null;
    if (userRequirement !== null) {
      message = "User requirement retrived";
      data = userRequirement.dataValues;
    }

    res.status(201).json({ message: message, data: data });
  } catch (err: any) {
    errorCode(err, next);
  }
};

export const updateRequirementForUser = async (
  req: reqWithUser,
  res: Response,
  next: NextFunction,
) => {
  const userId = req.userId;
  const dataToUpdate = req.body;
  try {
    const foundUser = await Requirements.findOne({ where: { userId: userId } });

    if (foundUser) {
      await Requirements.update(
        { ...dataToUpdate },
        {
          where: {
            userId: userId,
          },
        },
      );
    } else {
      const newRequirements = new Requirements({
        userId: userId,
        ...dataToUpdate,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      await newRequirements.save();
    }

    res.status(201).json({ message: "Requirement updated successfully" });
  } catch (err: any) {
    errorCode(err, next);
  }
};

export const addRequirementForUser = async (
  req: reqWithUser,
  res: Response,
  next: NextFunction,
) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = generalError("input error", 422);
      error.data = errors.array();
      throw error;
    }

    const userId = req.userId;
    const {
      minPrice,
      maxPrice,
      tax,
      committee,
      city,
      minRooms,
      maxRooms,
      essentials = null,
      neighborhood = null,
    } = req.body;

    const newRequirements = new Requirements({
      userId: userId,
      minPrice: minPrice,
      maxPrice: maxPrice,
      tax: tax,
      committee: committee,
      city: city,
      minRooms: minRooms,
      maxRooms: maxRooms,
      essentials: essentials,
      neighborhood: neighborhood,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await newRequirements.save();
    res.status(201).json({ message: "Requirements added successfully." });
  } catch (err: any) {
    // if (err.parent.constraint === "unique_user_id") {
    //   resetRequirementsConstraintOnError();
    // }
    errorCode(err, next);
  }
};
