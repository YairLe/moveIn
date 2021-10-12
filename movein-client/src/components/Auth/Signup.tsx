import React, { useState } from "react";
import useInput from "../../hooks/use-input";
import SignButton from "../Button/SignButton";
import Input from "../Input/Input";
import InputAuth from "./InputAuth";
import styles from "./Login.module.css";

interface IProps {
  setLoginPage: React.Dispatch<React.SetStateAction<boolean>>;
  loginPage: boolean;
}

const Signup: React.FC<IProps> = (props: IProps) => {
  const [formValid, setFormValid] = useState(false);
  const [handleFetch, setHandleFetch] = useState(false);

  const { setLoginPage, loginPage } = props;

  const {
    value: passwordConfirmation,
    isValid: ispasswordConfirmationValid,
    notifyInvalidValue: notifyInvalidpasswordConfirmation,
    inputSettingsChangeHandler: setpasswordConfirmation,
    inputBlur: blurpasswordConfirmation,
    resetInputSettings: resetpasswordConfirmation,
  } = useInput((value: string) => value.trim().length >= 5);

  const canHandleForm = formValid && ispasswordConfirmationValid;

  const cofirmPasswordInputProp = {
    type: "password",
    className: notifyInvalidpasswordConfirmation
      ? styles.inputInvalid
      : styles.input,
    id: "passwordConfirmation",
    name: "passwordConfirmation",
    value: passwordConfirmation,
    onChange: setpasswordConfirmation,
    onBlur: blurpasswordConfirmation,
  };

  return (
    <React.Fragment>
      <form
        name="AuthForm"
        onSubmit={(event) => {
          event.preventDefault();
          setHandleFetch(true);
        }}
      >
        <InputAuth
          handleFetch={handleFetch}
          setHandleFetch={setHandleFetch}
          passwordConfirmation={passwordConfirmation}
          setFormValid={setFormValid}
          resetpasswordConfirmation={resetpasswordConfirmation}
          loginPage={loginPage}
        />
        <div className={styles.inputDiv}>
          <Input
            labelStyle={styles.label}
            label={"Confirm Password"}
            inputInValid={!ispasswordConfirmationValid}
            inputInValidText={"please confirm password"}
            inputProp={cofirmPasswordInputProp}
          />
        </div>
        <SignButton
          buttonDivStyle={styles.loginButtonDiv}
          buttonStyle={styles.confirmSignButton}
          buttonDisabled={!canHandleForm}
          h1Style={styles.signh1}
          buttonType="submit"
        />
      </form>
    </React.Fragment>
  );
};

export default Signup;
