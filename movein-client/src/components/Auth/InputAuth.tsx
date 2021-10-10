import React from "react";
import useInput from "../../hooks/use-input";
import Input from "../Input/Input";
import styles from "./Login.module.css";

const InputAuth: React.FC = () => {
  const {
    value: username,
    isValid: isUsernameValid,
    notifyInvalidValue: notifyInvalidUsername,
    inputSettingsChangeHandler: setUsername,
    inputBlur: blurUsername,
    resetInputSettings: resetUsername,
  } = useInput((value: string) => value.trim().length >= 2);

  const {
    value: password,
    isValid: isPasswordValid,
    notifyInvalidValue: notifyInvalidPassword,
    inputSettingsChangeHandler: setPassword,
    inputBlur: blurPassword,
    resetInputSettings: resetPassword,
  } = useInput((value: string) => value.trim().length >= 5);

  return (
    <React.Fragment>
      <div className={styles.inputDiv}>
        <Input
          labelStyle={styles.label}
          label={"Username"}
          inputInValid={!isUsernameValid}
          inputInValidText={"Please enter username"}
          inputProp={{
            type: "text",
            className: styles.input,
            id: "Username",
            name: "Username",
            value: username,
            onChange: setUsername,
            onBlur: blurUsername,
          }}
        />
      </div>
      <div className={styles.inputDiv}>
        <Input
          labelStyle={styles.label}
          label={"Password"}
          inputInValid={!isPasswordValid}
          inputInValidText={"Please enter password"}
          inputProp={{
            type: "password",
            className: styles.input,
            id: "Password",
            name: "Password",
            value: password,
            onChange: setPassword,
            onBlur: blurPassword,
          }}
        />
      </div>
    </React.Fragment>
  );
};

export default InputAuth;
