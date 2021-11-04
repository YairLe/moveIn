import React, { useContext } from "react";
import { NewApartmentContext } from "../../../context/NewApartmentContext";
import InputTextForm from "../InputTextForm";
import styles from "../NewApartment.module.css";

const NewApartmentFirstPage: React.FC = () => {
  const validator = (value: string) => /^\d+$/.test(value) && +value > 0;
  const { newApartment, setNewApartment } = useContext(NewApartmentContext);
  console.log(newApartment, "printing");
  const inputTextProp = {
    inputStyle: styles.input,
    inputInvalidStyle: styles.inputInvalid,
    labelStyle: styles.label,
    validator: validator,
  };
  return (
    <React.Fragment>
      <div className={styles.inputDiv}>
        <InputTextForm
          {...inputTextProp}
          id="Street"
          name="Street"
          label="Street"
          type="text"
        />
      </div>
      <div className={styles.inputDiv}>
        <InputTextForm
          {...inputTextProp}
          id="Neighborhood"
          name="Neighborhood"
          label="Neighborhood"
          type="text"
        />
      </div>
      <div className={styles.inputDiv}>
        <InputTextForm
          {...inputTextProp}
          id="City"
          name="City"
          label="City"
          type="text"
        />
      </div>
      <div className={styles.inputDiv}>
        <InputTextForm
          {...inputTextProp}
          id="Rent"
          name="Rent"
          label="Rent"
          type="number"
        />
      </div>
      <div className={styles.inputDiv}>
        <InputTextForm
          {...inputTextProp}
          id="Tax"
          name="Tax"
          label={`Property tax 
          -2 months`}
          type="number"
        />
      </div>
      <div className={styles.inputDiv}>
        <InputTextForm
          {...inputTextProp}
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
