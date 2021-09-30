import bcrypt from "bcryptjs";
import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import errorCode from "../errors/errorCode";
import generalError from "../errors/generalError";
import User from "../models/User";

export const signupUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = generalError("Validation failed", 422);
    error.data = errors.array();
    throw error;
  }
  const { userName, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({
      userName: userName,
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    const result = await user.save();
    res.status(201).json({ message: "User created!", userId: result.id });
  } catch (err) {
    errorCode(err, next);
  }
};

export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { userName, password } = req.body;
  try {
    const user = await User.findOne({ where: { userName: userName } });
    if (!user) {
      throw generalError("A user with this email could not be found", 401);
    }
    const isEqual = await bcrypt.compare(password, user.password);

    if (!isEqual) {
      throw generalError("wrong password", 401);
    }
    const token = jwt.sign(
      {
        userName: user.userName,
        userId: user.id,
      },
      "someSuperSecretSecret",
      { expiresIn: "1h" },
    );
    res.status(200).json({ token: token, userId: user.id });
  } catch (err) {
    errorCode(err, next);
  }
};
