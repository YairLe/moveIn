import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import generalError from "../errors/generalError";

interface IDecodedToken {
  userId: string;
  iat: number;
  exp: number;
}

interface reqWithUser extends Request {
  userId?: string;
}

const checkAuth = (req: reqWithUser, res: Response, next: NextFunction) => {
  if (req.method === "OPTIONS") {
    return next();
  }
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    throw generalError("Not authenticated", 401);
  }

  const token = authHeader.split(" ")[1];
  let decodedToken: IDecodedToken;
  try {
    decodedToken = jwt.verify(token, "someSuperSecretSecret") as IDecodedToken;
  } catch (err: any) {
    err.statusCode = 500;
    throw err;
  }
  if (!decodedToken) {
    throw generalError("Not authenticated", 401);
  }
  req.userId = decodedToken.userId;
  next();
};

export default checkAuth;
