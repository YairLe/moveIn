import React, { useState } from "react";
import { INewApartment } from "../interfaces/interfaces";

interface IProps {
  children: React.ReactNode;
}

const initialNewApartment = {
  street: "",
  neighborhood: "",
  city: "",
  rent: -10,
  tax: -10,
  committee: -10,
  rooms: -10,
  floorMin: -10,
  floorMax: -10,
  comments: [""],
  photos: "empty",
};

const NewApartmentContext = React.createContext({
  newApartment: initialNewApartment,
  setNewApartment: (elementsToChange: INewApartment) => {},
});

const NewApartmentProvider: React.FC<IProps> = (props: IProps) => {
  const { children } = props;
  //   const data = localStorage.getItem("requirements")
  //     ? JSON.parse(localStorage.getItem("requirements") as string)
  //     : initialRequirements;
  const [newApartment, setNewApartment] =
    useState<INewApartment>(initialNewApartment);

  const changeRequirementsState = (elementsToChange: INewApartment) => {
    setNewApartment(elementsToChange);
  };

  const values = {
    newApartment: newApartment,
    setNewApartment: (elementsToChange: INewApartment) =>
      changeRequirementsState(elementsToChange),
  };
  return (
    <NewApartmentContext.Provider value={values}>
      {children}
    </NewApartmentContext.Provider>
  );
};

export { NewApartmentProvider, NewApartmentContext };
