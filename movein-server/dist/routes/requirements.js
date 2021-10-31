"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const requirement_1 = require("../controllers/requirement");
const validateKeys = [
    (0, express_validator_1.body)("minPrice").isFloat({ min: 1 }),
    (0, express_validator_1.body)("maxPrice").isNumeric(),
    (0, express_validator_1.body)("tax").isFloat({ min: 1 }),
    (0, express_validator_1.body)("committee").isFloat({ min: 1 }),
    (0, express_validator_1.body)("city").isString(),
    (0, express_validator_1.body)("minRooms").isFloat({ min: 1 }),
    (0, express_validator_1.body)("maxRooms").isFloat(),
];
const router = express_1.default.Router();
router.get("/getRequirement", requirement_1.getRequirementForUser);
router.post("/addRequirement", validateKeys, requirement_1.addRequirementForUser);
router.post("/updateRequirement", validateKeys, requirement_1.updateRequirementForUser);
exports.default = router;
