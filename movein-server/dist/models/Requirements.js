"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const database_1 = __importDefault(require("../util/database"));
const Requirements = database_1.default.define("requirements", {
    id: {
        type: sequelize_1.default.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: sequelize_1.default.INTEGER,
        allowNull: false,
        unique: true,
    },
    minPrice: {
        type: sequelize_1.default.INTEGER,
        allowNull: false,
    },
    maxPrice: {
        type: sequelize_1.default.INTEGER,
        allowNull: false,
    },
    tax: {
        type: sequelize_1.default.INTEGER,
        allowNull: false,
    },
    committee: {
        type: sequelize_1.default.INTEGER,
        allowNull: false,
    },
    city: {
        type: sequelize_1.default.STRING,
        allowNull: false,
    },
    neighborhood: {
        type: sequelize_1.default.ARRAY(sequelize_1.default.TEXT),
        allowNull: true,
    },
    minRooms: {
        type: sequelize_1.default.INTEGER,
        allowNull: false,
    },
    maxRooms: {
        type: sequelize_1.default.INTEGER,
        allowNull: false,
    },
    essentials: {
        type: sequelize_1.default.ARRAY(sequelize_1.default.TEXT),
        allowNull: true,
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
exports.default = Requirements;
