import express from "express";
import { body } from "express-validator";
import {
  addRequirementForUser,
  getRequirementForUser,
  updateRequirementForUser,
} from "../controllers/requirement";

const validateKeys = [
  body("minPrice").isFloat({ min: 1 }),
  body("maxPrice").isNumeric(),
  body("tax").isFloat({ min: 1 }),
  body("committee").isFloat({ min: 1 }),
  body("city").isString(),
  body("minRooms").isFloat({ min: 1 }),
  body("maxRooms").isFloat(),
];

const router = express.Router();

router.get("/getRequirement", getRequirementForUser);

router.post("/addRequirement", validateKeys, addRequirementForUser);

router.post("/updateRequirement", validateKeys, updateRequirementForUser);

export default router;
