import express from "express";
import {
  addNewApartment,
  getUserApartment,
  getUserApartments,
} from "../controllers/apartments";

const router = express.Router();

router.post("/newApartment", addNewApartment);

router.get("/getUserApartments", getUserApartments);

router.get("/getUserApartment", getUserApartment);

export default router;
