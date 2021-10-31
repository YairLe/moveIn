"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const database_1 = __importDefault(require("../util/database"));
const User = database_1.default.define("user", {
    id: {
        type: sequelize_1.default.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    userName: {
        type: sequelize_1.default.STRING,
        allowNull: false,
    },
    password: {
        type: sequelize_1.default.STRING,
        allowNull: false,
    },
    createdAt: {
        type: sequelize_1.default.DATE,
        allowNull: false,
    },
    updatedAt: {
        type: sequelize_1.default.DATE,
        allowNull: false,
    },
});
exports.default = User;
