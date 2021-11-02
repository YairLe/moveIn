import React from "react";
import Input from "../../Input/Input";
import styles from "../NewApartment.module.css";

const NewApartmentFirstPage: React.FC = () => {
  const tempBooleanValidator = false;
  const cofirmPasswordInputProp = {
    type: "password",
    className: tempBooleanValidator ? styles.inputInvalid : styles.input,
    // id: "passwordConfirmation",
    name: "passwordConfirmation",
    // value: passwordConfirmation,
    // onChange: setpasswordConfirmation,
    // onBlur: blurpasswordConfirmation,
  };

  return (
    <React.Fragment>
      <div className={styles.inputDiv}>
        <Input
          labelStyle={styles.label}
          label={"Street"}
          inputInValid={false}
          inputInValidText={""}
          inputProp={cofirmPasswordInputProp}
        />
      </div>
      <div className={styles.inputDiv}>
        <Input
          labelStyle={styles.label}
          label={"Neighborhood"}
          inputInValid={false}
          inputInValidText={""}
          inputProp={cofirmPasswordInputProp}
        />
      </div>
      <div className={styles.inputDiv}>
        <Input
          labelStyle={styles.label}
          label={"City"}
          inputInValid={false}
          inputInValidText={""}
          inputProp={cofirmPasswordInputProp}
        />
      </div>
      <div className={styles.inputDiv}>
        <Input
          labelStyle={styles.label}
          label={"Rent"}
          inputInValid={false}
          inputInValidText={""}
          inputProp={cofirmPasswordInputProp}
        />
      </div>
      <div className={styles.inputDiv}>
        <Input
          labelStyle={styles.label}
          label={`property tax 
              -2 months`}
          inputInValid={false}
          inputInValidText={""}
          inputProp={cofirmPasswordInputProp}
        />
      </div>
      <div className={styles.inputDiv}>
        <Input
          labelStyle={styles.label}
          label={`House 
              Committee`}
          inputInValid={false}
          inputInValidText={""}
          inputProp={cofirmPasswordInputProp}
        />
      </div>
    </React.Fragment>
  );
};

export default NewApartmentFirstPage;
