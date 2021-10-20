import React, { useState } from "react";
import useInput from "../../../hooks/use-input";
import SaveButton from "../../Button/SaveButton";
import CityInput from "./CityInput";
import Neighborhood from "./NeighborhoodInput";

const EditAreaForm: React.FC = () => {
  const [inputList, setInputList] = useState<Array<string>>([""]);

  const {
    value: city,
    isValid: isCityValid,
    notifyInvalidValue: notifyInvalidCity,
    inputSettingsChangeHandler: setCity,
    inputBlur: blurCity,
  } = useInput((value: string) => value.trim().length > 0);

  const submitFormHandler: React.FormEventHandler<HTMLFormElement> = (
    event,
  ) => {
    event.preventDefault();
    // handle here save Area
    console.log(inputList, city);
  };

  return (
    <form onSubmit={submitFormHandler}>
      <CityInput
        city={city}
        notifyInvalidCity={notifyInvalidCity}
        setCity={setCity}
        blurCity={blurCity}
      />
      <Neighborhood inputList={inputList} setInputList={setInputList} />
      <SaveButton buttonDisabled={!isCityValid} />
    </form>
  );
};

export default EditAreaForm;
