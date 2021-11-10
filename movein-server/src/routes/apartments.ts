import express from "express";
import { addNewApartment } from "../controllers/apartments";
import { body } from "express-validator";
import User from "../models/User";

const router = express.Router();


router.post('/newApartment', addNewApartment);

// router.post(
//   "/signup",
//   [
//     body("userName").custom((value) => {
//       return User.findOne({ where: { userName: value } }).then((userDoc: Object) => {
//         if (userDoc) {
//           return Promise.reject("userName already exists");
//         }
//       });
//     }),
//     body("password").trim().isLength({ min: 5 }),
//   ],
//   signupUser,
// );

// router.post("/login", loginUser);

export default router;
