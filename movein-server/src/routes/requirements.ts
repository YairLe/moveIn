import express from "express";
import { body } from "express-validator";
import {
  addRequirementForUser,
  getRequirementForUser,
  updateRequirementForUser,
} from "../controllers/requirement";

const validateKeys = [
  body("minPrice").isNumeric(),
  body("maxPrice").isNumeric(),
  body("tax").isNumeric(),
  body("committee").isNumeric(),
  body("city").isString(),
  body("rooms").isNumeric(),
];

const router = express.Router();

router.get("/getRequirement", getRequirementForUser);

router.post("/addRequirement", validateKeys, addRequirementForUser);

router.post("/updateRequirement", validateKeys, updateRequirementForUser);

export default router;
