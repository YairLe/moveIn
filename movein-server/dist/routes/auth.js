"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../controllers/auth");
const express_validator_1 = require("express-validator");
const User_1 = __importDefault(require("../models/User"));
const router = express_1.default.Router();
router.post("/signup", [
    (0, express_validator_1.body)("userName").custom((value) => {
        return User_1.default.findOne({ where: { userName: value } }).then((userDoc) => {
            if (userDoc) {
                return Promise.reject("userName already exists");
            }
        });
    }),
    (0, express_validator_1.body)("password").trim().isLength({ min: 5 }),
], auth_1.signupUser);
router.post("/login", auth_1.loginUser);
exports.default = router;
