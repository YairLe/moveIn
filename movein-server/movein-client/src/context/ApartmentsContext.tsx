import React, { useState } from "react";
import { IApartments } from "../interfaces/interfaces";

interface IProps {
  children: React.ReactNode;
}

const initialApartments = [
  {
    street: "",
    apartmentId: "",
    image: { data: "", type: "" },
  },
];

const ApartmentsContext = React.createContext({
  apartments: initialApartments,
  setApartments: (elementsToChange: IApartments[]) => {},
});

const ApartmentsProvider: React.FC<IProps> = (props: IProps) => {
  const { children } = props;

  const [apartments, setApartments] = useState<IApartments[]>([]);

  const changeApartmentsState = (elementsToChange: IApartments[]) => {
    setApartments(elementsToChange);
  };

  const values = {
    apartments,
    setApartments: (elementsToChange: IApartments[]) =>
      changeApartmentsState(elementsToChange),
  };
  return (
    <ApartmentsContext.Provider value={values}>
      {children}
    </ApartmentsContext.Provider>
  );
};

export { ApartmentsProvider, ApartmentsContext };
