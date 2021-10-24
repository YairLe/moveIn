import { Request } from "express";

export interface ErrorWithStatus extends Error {
  statusCode: number;
  data?: {}[];
}

export interface reqWithUser extends Request {
  userId?: string;
}
