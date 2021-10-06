import { ErrorWithStatus } from "../interfaces/interfaces";

const generalError = (errorMessage: string, errorCode: number) => {
  const error = new Error(errorMessage) as ErrorWithStatus;
  error.statusCode = errorCode;
  return error;
};

export default generalError;
