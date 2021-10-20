import React from "react";
import useInput from "../../../hooks/use-input";
import SaveButton from "../../Button/SaveButton";
import Input from "../../Input/Input";
import styles from "./EditRooms.module.css";

const EditRoomsForm: React.FC = () => {
  const numberValidator = (value: string) =>
    Number(value) > 0 && Number(value) < 10 && value.length < 5;

  const {
    value: minRooms,
    isValid: isMinRoomsValid,
    notifyInvalidValue: notifyInvalidMinRooms,
    inputSettingsChangeHandler: setMinRooms,
    inputBlur: blurMinRooms,
  } = useInput(numberValidator);

  const {
    value: maxRooms,
    isValid: isMaxRoomsValid,
    notifyInvalidValue: notifyInvalidMaxRooms,
    inputSettingsChangeHandler: setMaxRooms,
    inputBlur: blurMaxRooms,
  } = useInput(numberValidator);

  const allowSubmit =
    Number(minRooms) <= Number(maxRooms) && isMinRoomsValid && isMaxRoomsValid;

  const submitFormHandler: React.FormEventHandler<HTMLFormElement> = (
    event,
  ) => {
    event.preventDefault();
    //handle save to db
    console.log(minRooms, maxRooms);
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
  };

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
