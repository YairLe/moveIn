"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.signupUser = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const express_validator_1 = require("express-validator");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const errorCode_1 = __importDefault(require("../errors/errorCode"));
const generalError_1 = __importDefault(require("../errors/generalError"));
const User_1 = __importDefault(require("../models/User"));
const signupUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    try {
        if (!errors.isEmpty()) {
            const error = (0, generalError_1.default)("Validation failed", 422);
            error.data = errors.array();
            throw error;
        }
        const { userName, password } = req.body;
        const hashedPassword = yield bcryptjs_1.default.hash(password, 12);
        const user = new User_1.default({
            userName,
            password: hashedPassword,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
        const result = yield user.save();
        res.status(201).json({ message: "User created!", userId: result.id });
    }
    catch (err) {
        (0, errorCode_1.default)(err, next);
    }
});
exports.signupUser = signupUser;
const loginUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { userName, password } = req.body;
    try {
        const user = yield User_1.default.findOne({
            where: { userName },
            attributes: ["id", "userName", "password"],
        });
        if (!user) {
            throw (0, generalError_1.default)("A user with this username could not be found", 401);
        }
        const isEqual = yield bcryptjs_1.default.compare(password, user.password);
        if (!isEqual) {
            throw (0, generalError_1.default)("wrong password", 401);
        }
        const token = jsonwebtoken_1.default.sign({
            userName: user.userName,
            userId: user.id,
        }, "someSuperSecretSecret", { expiresIn: "1h" });
        res.status(200).json({ token, userName: user.userName });
    }
    catch (err) {
        (0, errorCode_1.default)(err, next);
    }
});
exports.loginUser = loginUser;
