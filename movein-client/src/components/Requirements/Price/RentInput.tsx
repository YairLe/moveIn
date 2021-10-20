import React from "react";
import Input from "../../Input/Input";
import styles from "./EditPrice.module.css";

interface IProps {
  notifyInvalidMinRent: boolean;
  minRent: string;
  setMinRent: React.ChangeEventHandler<HTMLInputElement>;
  blurMinRent: React.FocusEventHandler<HTMLInputElement>;
  notifyInvalidMaxRent: boolean;
  maxRent: string;
  setMaxRent: React.ChangeEventHandler<HTMLInputElement>;
  blurMaxRent: React.FocusEventHandler<HTMLInputElement>;
}

const RentInput: React.FC<IProps> = (props: IProps) => {
  const {
    notifyInvalidMinRent,
    minRent,
    setMinRent,
    blurMinRent,
    notifyInvalidMaxRent,
    maxRent,
    setMaxRent,
    blurMaxRent,
  } = props;

  const minRentInputProp = {
    type: "number",
    className: notifyInvalidMinRent ? styles.inputInvalid : styles.inputMinMax,
    id: "minRent",
    name: "minRent",
    value: minRent,
    onChange: setMinRent,
    onBlur: blurMinRent,
    min: 0,
    max: 10000,
    placeholder: "Min",
  };

  const maxRentInputProp = {
    type: "number",
    className: notifyInvalidMaxRent ? styles.inputInvalid : styles.inputMinMax,
    id: "maxRent",
    name: "maxRent",
    value: maxRent,
    onChange: setMaxRent,
    onBlur: blurMaxRent,
    min: 0,
    max: 10000,
    placeholder: "Max",
  };

  return (
    <div className={styles.divMinMax}>
      <p className={styles.rentMinMax}>Rent</p>
      <Input
        inputProp={minRentInputProp}
        inputInValid={false}
        inputInValidText={""}
      />
      -
      <Input
        inputProp={maxRentInputProp}
        inputInValid={false}
        inputInValidText={""}
      />
      <p className={styles.nisMinMax}>NIS</p>
    </div>
  );
};

export default RentInput;
