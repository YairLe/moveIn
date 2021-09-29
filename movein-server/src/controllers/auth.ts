import errorCode from "../errors/errorCode";
import User from "../models/user";
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
import { Request, Response, NextFunction } from "express";

export const signupUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error("Validation failed") as any;
    error.statusCode = 422;
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
    console.log(result);
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
      const error = new Error(
        "A user with this email could not be found",
      ) as any;
      error.statusCode = 401;
      throw error;
    }
    const isEqual = await bcrypt.compare(password, user.password);

    if (!isEqual) {
      const error = new Error("wrong password") as any;
      error.statusCode = 401;
      throw error;
    }
    const token = jwt.sign(
      {
        email: user.email,
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
