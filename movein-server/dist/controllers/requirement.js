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
exports.addRequirementForUser = exports.updateRequirementForUser = exports.getRequirementForUser = void 0;
const express_validator_1 = require("express-validator");
const errorCode_1 = __importDefault(require("../errors/errorCode"));
const generalError_1 = __importDefault(require("../errors/generalError"));
const Requirements_1 = __importDefault(require("../models/Requirements"));
const database_1 = __importDefault(require("../util/database"));
const resetRequirementsConstraintOnError = () => __awaiter(void 0, void 0, void 0, function* () {
    const sequenceColumn = "requirements_id_seq";
    const tableName = "requirements";
    const columnName = "id";
    const [[{ max }]] = yield database_1.default.query(`SELECT MAX("${columnName}") AS max FROM public."${tableName}";`);
    // Set the autoincrement current value to highest value + 1
    yield database_1.default.query(`ALTER SEQUENCE public."${sequenceColumn}" RESTART WITH ${+max + 1};`);
});
const getRequirementForUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.userId;
    try {
        const userRequirement = yield Requirements_1.default.findOne({
            where: { userId },
            attributes: {
                exclude: ["id", "userId", "createdAt", "updatedAt"],
            },
        });
        let message = "No requirements found for user";
        let data = null;
        if (userRequirement !== null) {
            message = "User requirement retrived";
            data = userRequirement.dataValues;
        }
        res.status(201).json({ message, data });
    }
    catch (err) {
        (0, errorCode_1.default)(err, next);
    }
});
exports.getRequirementForUser = getRequirementForUser;
const updateRequirementForUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.userId;
    const dataToUpdate = req.body;
    try {
        const foundUser = yield Requirements_1.default.findOne({ where: { userId } });
        if (foundUser) {
            yield Requirements_1.default.update(Object.assign({}, dataToUpdate), {
                where: {
                    userId,
                },
            });
        }
        else {
            const newRequirements = new Requirements_1.default(Object.assign(Object.assign({ userId: userId }, dataToUpdate), { createdAt: new Date(), updatedAt: new Date() }));
            yield newRequirements.save();
        }
        res.status(201).json({ message: "Requirement updated successfully" });
    }
    catch (err) {
        (0, errorCode_1.default)(err, next);
    }
});
exports.updateRequirementForUser = updateRequirementForUser;
const addRequirementForUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            const error = (0, generalError_1.default)("input error", 422);
            error.data = errors.array();
            throw error;
        }
        const userId = req.userId;
        const { minPrice, maxPrice, tax, committee, city, minRooms, maxRooms, essentials = null, neighborhood = null, } = req.body;
        const newRequirements = new Requirements_1.default({
            userId,
            minPrice,
            maxPrice,
            tax,
            committee,
            city,
            minRooms,
            maxRooms,
            essentials,
            neighborhood,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
        yield newRequirements.save();
        res.status(201).json({ message: "Requirements added successfully." });
    }
    catch (err) {
        // if (err.parent.constraint === "unique_user_id") {
        //   resetRequirementsConstraintOnError();
        // }
        (0, errorCode_1.default)(err, next);
    }
});
exports.addRequirementForUser = addRequirementForUser;
