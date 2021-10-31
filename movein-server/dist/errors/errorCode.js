"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorCode = (err, next) => {
    if (!err.statusCode) {
        err.statusCode = 500;
    }
    next(err);
};
exports.default = errorCode;
