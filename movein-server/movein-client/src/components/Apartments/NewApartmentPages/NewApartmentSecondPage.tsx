import React, { useContext, useState } from "react";
import { NewApartmentContext } from "../../../context/NewApartmentContext";
import IncreasedInput from "../../Requirements/IncreasedInput";
import InputTextForm from "../InputTextForm";
import styles from "../NewApartment.module.css";

const NewApartmentSecondPage: React.FC = () => {
  const { newApartment, setNewApartment } = useContext(NewApartmentContext);

  const [inputList, setInputList] = useState<string[]>(newApartment.comments);

  const validator = (value: string) => /^\d+$/.test(value) && +value > 0;

  const inputTextProp = {
    validator,
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
          inputInvalidStyle={styles.inputInvalid}
        />
      </div>
      <div className={styles.inputDivSecondPage}>
        <InputTextForm
          {...inputTextProp}
          id="floorMin"
          name="floorMin"
          label="Floor"
          type="number"
          inputStyle={styles.inputFloor}
          labelStyle={styles.labelFloor}
          inputInvalidStyle={styles.inputInvalidFloor}
        />
        <InputTextForm
          {...inputTextProp}
          id="floorMax"
          name="floorMax"
          label="out of"
          type="number"
          inputStyle={styles.inputFloor}
          labelStyle={styles.labelFloor}
          inputInvalidStyle={styles.inputInvalidFloor}
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
