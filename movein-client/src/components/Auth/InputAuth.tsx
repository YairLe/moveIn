import React from "react";
import Input from "../Input/Input";
import styles from "./Login.module.css";

const InputAuth: React.FC = () => {
  return (
    <React.Fragment>
      <div className={styles.inputDiv}>
        <Input
          labelStyle={styles.label}
          label={"Username"}
          inputInValid={false}
          inputInValidText={"hey"}
          inputProp={{ type: "text", className: styles.input }}
        />
      </div>
      <div className={styles.inputDiv}>
        <Input
          labelStyle={styles.label}
          label={"Password"}
          inputInValid={false}
          inputInValidText={"hey"}
          inputProp={{ type: "password", className: styles.input }}
        />
      </div>
    </React.Fragment>
  );
};

export default InputAuth;
