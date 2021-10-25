import React from "react";
import Input from "../../Input/Input";
import styles from "./EditArea.module.css";

interface IProps {
  notifyInvalidCity: boolean;
  city: string;
  setCity: React.ChangeEventHandler<HTMLInputElement>;
  blurCity: React.FocusEventHandler<HTMLInputElement>;
}

const CityInput: React.FC<IProps> = (props: IProps) => {
  const { notifyInvalidCity, city, setCity, blurCity } = props;

  const cityInputProp = {
    type: "text",
    className: ` ${notifyInvalidCity ? styles.inputInvalid : styles.input}`,
    id: "City",
    name: "City",
    value: city,
    onChange: setCity,
    onBlur: blurCity,
    placeholder: "Add City",
  };

  return (
    <Input
      labelStyle={styles.cityLabel}
      label="City"
      inputInValid={false}
      inputInValidText={"Add City"}
      inputProp={cityInputProp}
    />
  );
};

export default CityInput;
