import express from "express";
import { loginUser, signupUser } from "../controllers/auth";
import { body } from "express-validator";
import User from "../models/User";

const router = express.Router();

router.post(
  "/signup",
  [
    body("userName").custom((value, { req }) => {
      User.findOne({ where: { userName: value } }).then((userDoc: Object) => {
        if (userDoc) {
          return Promise.reject("userName already exists");
        }
      });
    }),
    body("password").trim().isLength({ min: 5 }),
  ],
  signupUser,
);

router.post("/login", loginUser);

export default router;
