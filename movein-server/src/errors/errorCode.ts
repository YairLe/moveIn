const errorCode = (err: any, next: any) => {
  if (!err.statusCode) {
    err.statusCode = 500;
  }
  next(err);
};

export default errorCode;
