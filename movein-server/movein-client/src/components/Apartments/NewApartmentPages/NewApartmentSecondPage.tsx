import React, { useState } from "react";
import Input from "../../Input/Input";
import IncreasedInput from "../../Requirements/IncreasedInput";
import InputTextForm from "../InputTextForm";
import styles from "../NewApartment.module.css";

const NewApartmentSecondPage: React.FC = () => {
  const tempBooleanValidator = false;
  const [inputList, setInputList] = useState<string[]>([""]);

  const validator = (value: string) => /^\d+$/.test(value) && +value > 0;

  const inputTextProp = {
    inputInvalidStyle: styles.inputInvalid,
    validator: validator,
  };
  return (
    <React.Fragment>
      <div className={styles.inputDivSecondPage}>
        <InputTextForm
          {...inputTextProp}
          id="Rooms"
          name="Rooms"
          label="Rooms"
          type="number"
          inputStyle={styles.input}
          labelStyle={styles.label}
        />
      </div>
      <div className={styles.inputDivSecondPage}>
        <InputTextForm
          {...inputTextProp}
          id="FloorMin"
          name="FloorMin"
          label="Floor"
          type="number"
          inputStyle={styles.inputFloor}
          labelStyle={styles.labelFloor}
        />
        <InputTextForm
          {...inputTextProp}
          id="FloorMax"
          name="FloorMax"
          label="out of"
          type="number"
          inputStyle={styles.inputFloor}
          labelStyle={styles.labelFloor}
        />
      </div>

      <IncreasedInput
        inputList={inputList}
        setInputList={setInputList}
        placeholder="Add Comments"
        element={
          <p style={{ paddingLeft: ".5rem" }} className={styles.label}>
            Comments
          </p>
        }
      />
    </React.Fragment>
  );
};

export default NewApartmentSecondPage;
