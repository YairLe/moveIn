import React, { useContext, useEffect, useState } from "react";
import { RequirementsContext } from "../../../context/RequirementsContext";
import useInput from "../../../hooks/use-input";
import { IRequirements } from "../../../interfaces/interfaces";
import SaveButton from "../../Button/SaveButton";
import Input from "../../Input/Input";
import UpdateRequirements from "../UpdateRequirements";
import styles from "./EditRooms.module.css";

const EditRoomsForm: React.FC = () => {
  const { requirements, setRequirements } = useContext(RequirementsContext);
  const { handleFetching } = UpdateRequirements();
  const [oldValue, setOldValue] = useState<IRequirements>({ ...requirements });

  const numberValidator = (value: string) =>
    +value > 0 && +value < 10 && value.length < 5;

  const {
    value: minRooms,
    isValid: isMinRoomsValid,
    notifyInvalidValue: notifyInvalidMinRooms,
    inputSettingsChangeHandler: setMinRooms,
    inputBlur: blurMinRooms,
  } = useInput(numberValidator, String(requirements.minRooms));

  const {
    value: maxRooms,
    isValid: isMaxRoomsValid,
    notifyInvalidValue: notifyInvalidMaxRooms,
    inputSettingsChangeHandler: setMaxRooms,
    inputBlur: blurMaxRooms,
  } = useInput(numberValidator, String(requirements.maxRooms));

  const allowSubmit =
    +minRooms <= +maxRooms &&
    isMinRoomsValid &&
    isMaxRoomsValid &&
    Object.entries(oldValue).toString() !==
      Object.entries(requirements).toString();

  const submitFormHandler: React.FormEventHandler<HTMLFormElement> = async (
    event,
  ) => {
    event.preventDefault();
    const response = await handleFetching(oldValue);
    if (response.data) {
      setRequirements(oldValue);
      localStorage.setItem("requirements", JSON.stringify(oldValue));
      alert(response.data.message);
    }
  };

  const minRoomsInputProp = {
    type: "number",
    className: notifyInvalidMinRooms ? styles.inputInvalid : styles.input,
    id: "minRooms",
    name: "minRooms",
    value: minRooms,
    onChange: setMinRooms,
    onBlur: blurMinRooms,
    min: 0,
    max: 10,
    placeholder: "Min",
    maxLength: 4,
    step: 0.5,
  };

  const maxRoomsInputProp = {
    type: "number",
    className: notifyInvalidMaxRooms ? styles.inputInvalid : styles.input,
    id: "maxRooms",
    name: "maxRooms",
    value: maxRooms,
    onChange: setMaxRooms,
    onBlur: blurMaxRooms,
    min: 0,
    max: 10,
    placeholder: "Max",
    maxLength: 4,
    step: 0.5,
  };

  useEffect(() => {
    setOldValue((prevState: IRequirements) => {
      return {
        ...prevState,
        minRooms: +minRooms,
        maxRooms: +maxRooms,
      };
    });
  }, [minRooms, maxRooms]);

  return (
    <form onSubmit={submitFormHandler}>
      <div className={styles.divMinMax}>
        <Input
          inputProp={minRoomsInputProp}
          inputInValid={false}
          inputInValidText={""}
        />
        -
        <Input
          inputProp={maxRoomsInputProp}
          inputInValid={false}
          inputInValidText={""}
        />
        <p className={styles.roomsMinMax}>Rooms</p>
      </div>
      <SaveButton buttonDisabled={!allowSubmit} />
    </form>
  );
};

export default EditRoomsForm;
