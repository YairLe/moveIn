import jwt from "jsonwebtoken";
import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import UseAxios from "../../hooks/use-axios";
import useInput from "../../hooks/use-input";
import Input from "../Input/Input";
import styles from "./Login.module.css";

interface IProps {
  handleFetch: boolean;
  setHandleFetch: React.Dispatch<React.SetStateAction<boolean>>;
  passwordConfirmation?: string;
  setFormValid: React.Dispatch<React.SetStateAction<boolean>>;
  resetpasswordConfirmation?: Function;
  loginPage: boolean;
}

const InputAuth: React.FC<IProps> = (props: IProps) => {
  const [, setCookie] = useCookies(["login", "token"]);

  const {
    handleFetch,
    setHandleFetch,
    passwordConfirmation = "",
    setFormValid,
    resetpasswordConfirmation = () => {},
    loginPage,
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

  const passwordInputProp = {
    type: "password",
    className: notifyInvalidPassword ? styles.inputInvalid : styles.input,
    id: "Password",
    name: "Password",
    value: password,
    onChange: setPassword,
    onBlur: blurPassword,
    autoComplete: "on",
  };

  const usernameInputProp = {
    type: "text",
    className: notifyInvalidUsername ? styles.inputInvalid : styles.input,
    id: "Username",
    name: "Username",
    value: username,
    onChange: setUsername,
    onBlur: blurUsername,
  };

  const { loading, fetchData } = UseAxios({
    method: "post",

    url: loginPage ? "/login" : "/signup",
  });

  const onSubmitFormHandler = async () => {
    const response = await fetchData({
      userName: username,
      password: password,
    });

    if (response) {
      switch (response.status) {
        case 200: {
          const responseData = response.data;
          const { userName, userId, exp } = jwt.decode(
            responseData.token
          ) as any;
          const expirationTime = exp * 1000;
          const expirationDate = new Date(expirationTime);

          setCookie("token", responseData.token, {
            expires: expirationDate,
          });
          setCookie(
            "login",
            {
              loggedIn: true,
              userId: userId,
              userName: userName,
              expires: expirationTime,
            },
            {
              expires: expirationDate,
            }
          );

          break;
        }
        case 201: {
          alert(response.data.message);
          resetUsername();
          resetpasswordConfirmation();
          resetPassword();
          break;
        }
        default: {
          alert("Wrong Username or Password");
        }
      }
    }
  };

  useEffect(() => {
    if (isPasswordValid && isUsernameValid) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [isPasswordValid, isUsernameValid]);

  useEffect(() => {
    if (handleFetch) {
      setHandleFetch(false);

      switch (loginPage) {
        case true: {
          onSubmitFormHandler();
          break;
        }
        case false: {
          if (passwordConfirmation === password) {
            onSubmitFormHandler();
          } else {
            alert("Passwords don't match");
            setFormValid(false);
            resetpasswordConfirmation();
            resetPassword();
          }
          break;
        }
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
          inputProp={usernameInputProp}
        />
      </div>
      <div className={styles.inputDiv}>
        <Input
          labelStyle={styles.label}
          label={"Password"}
          inputInValid={!isPasswordValid}
          inputInValidText={"Please enter password"}
          inputProp={passwordInputProp}
        />
      </div>
    </React.Fragment>
  );
};

export default InputAuth;
