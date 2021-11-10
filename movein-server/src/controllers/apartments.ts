import { NextFunction, Response } from "express";
import errorCode from "../errors/errorCode";
import { reqWithUser } from "../interfaces/interfaces";
import Apartments from '../models/Apartments';


export const addNewApartment = async (
    req: reqWithUser,
    res: Response,
    next: NextFunction,
) => {
    try {
        const userId = req.userId;
        const dataToUpdate = req.body;

        const newApartment = new Apartments({
            userId: userId,
            ...dataToUpdate,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        await newApartment.save();

        // const errors = validationResult(req);
        // if (!errors.isEmpty()) {
        //     const error = generalError("input error", 422);
        //     error.data = errors.array();
        //     throw error;
        // }


        res.status(201).json({ message: "Apartment added successfully." });
    } catch (err: any) {
        // if (err.parent.constraint === "unique_user_id") {
        //   resetRequirementsConstraintOnError();
        // }
        errorCode(err, next);
    }
};
