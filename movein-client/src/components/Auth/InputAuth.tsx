import React, { useEffect } from "react";
import UseAxios from "../../hooks/use-axios";
import useInput from "../../hooks/use-input";
import Input from "../Input/Input";
import styles from "./Login.module.css";

interface IProps {
  handleFetch?: boolean;
  setHandleFetch: Function;
  passwordConfirmation?: string;
  setFormValid: Function;
  setLoginPage: React.Dispatch<React.SetStateAction<boolean>>;
  resetpasswordConfirmation?: Function;
}

const InputAuth: React.FC<IProps> = (props: IProps) => {
  const {
    handleFetch,
    setHandleFetch,
    passwordConfirmation,
    setFormValid,
    setLoginPage,
    resetpasswordConfirmation,
  } = props;

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

  const login = false;

  const { response, loading, fetchData } = UseAxios({
    method: "post",
    body: {
      userName: username,
      password: password,
    },
    url: login ? "/login" : "/signup",
  });

  const onSubmitFormHandler = async () => {
    await fetchData();
    setHandleFetch(false);
  };

  useEffect(() => {
    if (response.data && response.data.status === 201) {
      alert(response.data.data.message);
      resetUsername();
    }
    if (response.error) {
      alert(response.error);
    }
    if (resetpasswordConfirmation) {
      resetpasswordConfirmation();
    }
    resetPassword();
  }, [response, loading]);

  useEffect(() => {
    if (isPasswordValid && isUsernameValid) {
      setFormValid(true);
    }
  }, [isPasswordValid, isUsernameValid]);

  useEffect(() => {
    if (handleFetch && passwordConfirmation) {
      console.log("first", passwordConfirmation, "second", password);
      setHandleFetch(false);
      if (passwordConfirmation === password) {
        onSubmitFormHandler();
      } else {
        alert("Password don't match");
        setFormValid(false);
        if (resetpasswordConfirmation) {
          resetpasswordConfirmation();
        }
        resetPassword();
      }
    }
  }, [handleFetch, password, passwordConfirmation]);

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
            className: notifyInvalidUsername
              ? styles.inputInvalid
              : styles.input,
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
            className: notifyInvalidPassword
              ? styles.inputInvalid
              : styles.input,
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
