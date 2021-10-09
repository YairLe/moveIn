import React from "react";
import Input from "../Input/Input";
import InputAuth from "./InputAuth";
import styles from "./Login.module.css";

const Signup: React.FC = () => {
  return (
    <React.Fragment>
      <InputAuth />
      <div className={styles.inputDiv}>
        <Input
          labelStyle={styles.label}
          label={"Confirm Password"}
          inputInValid={false}
          inputInValidText={"hey"}
          inputProp={{ type: "password", className: styles.input }}
        />
      </div>
    </React.Fragment>
  );
};

export default Signup;
