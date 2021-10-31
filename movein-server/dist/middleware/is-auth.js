"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const checkAuth = (req, res, next) => {
    if (req.method === "OPTIONS") {
        return next();
    }
    const authHeader = req.get("Authorization");
    if (!authHeader) {
        res.redirect("/");
        return;
        // throw generalError("Not authenticated", 401);
    }
    const token = authHeader.split(" ")[1];
    let decodedToken;
    try {
        decodedToken = jsonwebtoken_1.default.verify(token, "someSuperSecretSecret");
    }
    catch (err) {
        err.statusCode = 500;
        throw err;
    }
    if (!decodedToken) {
        res.redirect("/");
        return;
        // throw generalError("Not authenticated", 401);
    }
    req.userId = decodedToken.userId;
    next();
};
exports.default = checkAuth;
