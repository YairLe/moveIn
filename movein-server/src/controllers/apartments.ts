import { NextFunction, Response } from "express";
import errorCode from "../errors/errorCode";
import Apartments from "../models/Apartments";
import Images from "../models/Images";

interface IApartmentObject {
  street: string;
  apartmentId: string;
  "images.id": number;
  "images.userId": number;
  "images.image": Buffer;
}

export const addNewApartment = async (
  req: any,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.userId;
    const dataToUpdate = JSON.parse(req.body.json);
    const images =
      req.files.files.length > 1 ? req.files.files : [req.files.files];

    const newApartment = new Apartments({
      userId,
      ...dataToUpdate,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const newApartmentAfterSave = await newApartment.save();
    const apartmentId = newApartmentAfterSave.dataValues.id;
    const apartmentName = newApartmentAfterSave.dataValues.street;

    const objectToSend: any = [];

    images.forEach((file: any) => {
      objectToSend.push({
        name: file.name,
        userId,
        image: file.data,
        apartmentId,
        apartmentName,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    });
    await Images.bulkCreate(objectToSend);

    res.status(201).json({ message: "Apartment added successfully." });
  } catch (err: any) {
    errorCode(err, next);
  }
};

export const getUserApartments = async (
  req: any,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.userId;
    console.log("im trying to do it");
    let result = await Apartments.findAll({
      where: { userId },
      attributes: ["street", ["id", "apartmentId"]],
      raw: true,
      include: [
        {
          model: Images,
          required: true,
          attributes: ["id", "userId", "image"],
          where: { userId },
        },
      ],
    });

    if (result.length > 1) {
      result = result.filter(
        (
          apartmentObject: IApartmentObject,
          index: number,
          resultArray: IApartmentObject[],
        ) =>
          resultArray.findIndex(
            (resultApartmentObject: IApartmentObject) =>
              resultApartmentObject.apartmentId == apartmentObject.apartmentId,
          ) == index,
      );
    }

    console.log(result);

    res.status(201).json(result);
  } catch (err: any) {
    errorCode(err, next);
  }
};
