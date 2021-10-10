import React from "react";
import useInput from "../../hooks/use-input";
import SignButton from "../Button/SignButton";
import Input from "../Input/Input";
import InputAuth from "./InputAuth";
import styles from "./Login.module.css";

interface IProps {
  setLoginPage: React.Dispatch<React.SetStateAction<boolean>>;
}

const Signup: React.FC<IProps> = (props: IProps) => {
  const { setLoginPage } = props;
  const {
    value: passwordConfirmation,
    isValid: ispasswordConfirmationValid,
    notifyInvalidValue: notifyInvalidpasswordConfirmation,
    inputSettingsChangeHandler: setpasswordConfirmation,
    inputBlur: blurpasswordConfirmation,
    resetInputSettings: resetpasswordConfirmation,
  } = useInput((value: string) => value.trim().length >= 5);

  return (
    <React.Fragment>
      <InputAuth />
      <div className={styles.inputDiv}>
        <Input
          labelStyle={styles.label}
          label={"Confirm Password"}
          inputInValid={!ispasswordConfirmationValid}
          inputInValidText={"please confirm password"}
          inputProp={{
            type: "password",
            className: styles.input,
            id: "passwordConfirmation",
            name: "passwordConfirmation",
            value: passwordConfirmation,
            onChange: setpasswordConfirmation,
            onBlur: blurpasswordConfirmation,
          }}
        />
      </div>
      <SignButton
        buttonDivStyle={styles.loginButtonDiv}
        buttonStyle={styles.confirmSignButton}
        handleClick={() => {
          setLoginPage(false);
        }}
        h1Style={styles.signh1}
      />
    </React.Fragment>
  );
};

export default Signup;
