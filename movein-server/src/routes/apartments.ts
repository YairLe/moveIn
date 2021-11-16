import express from "express";
import { addNewApartment } from "../controllers/apartments";

const router = express.Router();

router.post("/newApartment", addNewApartment);

export default router;
