import React, { useContext, useEffect } from "react";
import { NewApartmentContext } from "../../context/NewApartmentContext";
import useInput from "../../hooks/use-input";
import { INewApartment } from "../../interfaces/interfaces";
import Input from "../Input/Input";
import styles from "./InputTextForm.module.css";

interface IProps {
  inputStyle: string;
  inputInvalidStyle: string;
  validator: (value: string) => boolean;
  labelStyle: string;
  type: string;
  id: string;
  name: string;
  label: string;
}

const InputTextForm: React.FC<IProps> = (props: IProps) => {
  const {
    inputStyle,
    validator,
    type,
    id,
    name,
    inputInvalidStyle,
    label,
    labelStyle,
  } = props;
  const { newApartment, setNewApartment } = useContext(NewApartmentContext);

  const nameLoweredCased = name.toLowerCase() as keyof INewApartment;
  const {
    value,
    isValid,
    notifyInvalidValue,
    inputSettingsChangeHandler,
    inputBlur,
  } = useInput(
    validator,
    newApartment[nameLoweredCased] ? String(newApartment[nameLoweredCased]) : ""
  );

  useEffect(() => {
    if (value !== newApartment[nameLoweredCased] && isValid) {
      const element = { ...newApartment };
      if (nameLoweredCased !== "comments") {
        element[nameLoweredCased] = value;
      }
      setNewApartment(element);
    }
  }, [value, newApartment]);

  const taxInputProp = {
    type: type,
    className: `${styles.taxInputProperty} ${
      notifyInvalidValue ? inputInvalidStyle : inputStyle
    }`,
    id: id,
    name: name,
    value: value,
    onChange: inputSettingsChangeHandler,
    onBlur: inputBlur,
    min: 0,
  };

  return (
    <React.Fragment>
      <Input
        label={label}
        inputProp={taxInputProp}
        labelStyle={labelStyle}
        inputInValid={isValid}
        inputInValidText={""}
      />
    </React.Fragment>
  );
};

export default InputTextForm;
