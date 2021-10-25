import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { IRequirements } from "../interfaces/interfaces";

interface IProps {
  children: React.ReactNode;
}
const initialRequirements = {
  minPrice: 1,
  maxPrice: 1,
  tax: 1,
  committee: 1,
  city: "",
  neighborhood: [""],
  minRooms: 1,
  maxRooms: 1,
  essentials: [""],
};

const RequirementsContext = React.createContext({
  requirements: initialRequirements,
  setRequirements: (elementsToChange: IRequirements) => {},
});

const RequirementsProvider: React.FC<IProps> = (props: IProps) => {
  const { children } = props;
  const data = localStorage.getItem("requirements")
    ? JSON.parse(localStorage.getItem("requirements") as string)
    : initialRequirements;
  const [requirements, setRequirements] = useState<IRequirements>(data);

  const changeRequirementsState = (elementsToChange: IRequirements) => {
    setRequirements(elementsToChange);
  };

  const values = {
    requirements: requirements,
    setRequirements: (elementsToChange: IRequirements) =>
      changeRequirementsState(elementsToChange),
  };

  return (
    <RequirementsContext.Provider value={values}>
      {children}
    </RequirementsContext.Provider>
  );
};

export { RequirementsProvider, RequirementsContext };
