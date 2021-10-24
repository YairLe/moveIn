import React, { useContext, useEffect, useState } from "react";
import { RequirementsContext } from "../../../context/RequirementsContext";
import useInput from "../../../hooks/use-input";
import { IRequirements } from "../../../interfaces/interfaces";
import SaveButton from "../../Button/SaveButton";
import UpdateRequirements from "../UpdateRequirements";
import CityInput from "./CityInput";
import Neighborhood from "./NeighborhoodInput";

const EditAreaForm: React.FC = () => {
  const { requirements, setRequirements } = useContext(RequirementsContext);
  const [inputList, setInputList] = useState<Array<string>>(
    requirements.neighborhood,
  );
  const { handleFetching } = UpdateRequirements();

  const [oldValue, setOldValue] = useState<IRequirements>({ ...requirements });

  const {
    value: city,
    isValid: isCityValid,
    notifyInvalidValue: notifyInvalidCity,
    inputSettingsChangeHandler: setCity,
    inputBlur: blurCity,
  } = useInput((value: string) => value.trim().length > 0, requirements.city);

  const submitFormHandler: React.FormEventHandler<HTMLFormElement> = async (
    event,
  ) => {
    event.preventDefault();
    const response = await handleFetching(oldValue);
    if (response.data) {
      localStorage.setItem("requirements", JSON.stringify(oldValue));
      setRequirements(oldValue);
      alert(response.data.message);
    }
  };

  const allowSubmit =
    isCityValid &&
    Object.entries(oldValue).toString() !==
      Object.entries(requirements).toString();

  useEffect(() => {
    setOldValue((prevState: IRequirements) => {
      return {
        ...prevState,
        city: city,
        neighborhood:
          inputList.length !== 1
            ? inputList.filter((value) => value !== "")
            : inputList,
      };
    });
  }, [city, inputList]);

  return (
    <form onSubmit={submitFormHandler}>
      <CityInput
        city={city}
        notifyInvalidCity={notifyInvalidCity}
        setCity={setCity}
        blurCity={blurCity}
      />
      <Neighborhood inputList={inputList} setInputList={setInputList} />
      <SaveButton buttonDisabled={!allowSubmit} />
    </form>
  );
};

export default EditAreaForm;
