import React from "react";
import InputTextForm from "../InputTextForm";
import styles from "../NewApartment.module.css";

const NewApartmentFirstPage: React.FC = () => {
  const validatorForNumber = (value: string) =>
    /^\d+$/.test(value) && +value > 0;
  const validatorForString = (value: string) => value.length < 20;
  const inputNumberProp = {
    inputStyle: styles.input,
    inputInvalidStyle: styles.inputInvalid,
    labelStyle: styles.label,
    validator: validatorForNumber,
  };
  const inputStringProp = {
    inputStyle: styles.input,
    inputInvalidStyle: styles.inputInvalid,
    labelStyle: styles.label,
    validator: validatorForString,
  };
  return (
    <React.Fragment>
      <div className={styles.inputDiv}>
        <InputTextForm
          {...inputStringProp}
          id="Street"
          name="Street"
          label="Street"
          type="text"
        />
      </div>
      <div className={styles.inputDiv}>
        <InputTextForm
          {...inputStringProp}
          id="Neighborhood"
          name="Neighborhood"
          label="Neighborhood"
          type="text"
        />
      </div>
      <div className={styles.inputDiv}>
        <InputTextForm
          {...inputStringProp}
          id="City"
          name="City"
          label="City"
          type="text"
        />
      </div>
      <div className={styles.inputDiv}>
        <InputTextForm
          {...inputNumberProp}
          id="Rent"
          name="Rent"
          label="Rent"
          type="number"
        />
      </div>
      <div className={styles.inputDiv}>
        <InputTextForm
          {...inputNumberProp}
          id="Tax"
          name="Tax"
          label={`Property tax 
          -2 months`}
          type="number"
        />
      </div>
      <div className={styles.inputDiv}>
        <InputTextForm
          {...inputNumberProp}
          id="Committee"
          name="Committee"
          label={`House 
          Committee`}
          type="number"
        />
      </div>
    </React.Fragment>
  );
};

export default NewApartmentFirstPage;
