import express from "express";
import { addNewApartment, getUserApartments } from "../controllers/apartments";

const router = express.Router();

router.post("/newApartment", addNewApartment);

router.get("/getUserApartments", getUserApartments);

export default router;
