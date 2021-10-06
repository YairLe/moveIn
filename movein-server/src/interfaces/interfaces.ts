import { Request } from "express";

export interface ErrorWithStatus extends Error {
  statusCode: number;
  data?: Array<{}>;
}

export interface reqWithUser extends Request {
  userId?: string;
}
