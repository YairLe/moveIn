"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generalError = (errorMessage, errorCode) => {
    const error = new Error(errorMessage);
    error.statusCode = errorCode;
    return error;
};
exports.default = generalError;
