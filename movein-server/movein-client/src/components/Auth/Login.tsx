import React, { useState } from "react";
import loginLogo from "../../images/LogIn.svg";
import Button from "../Button/Button";
import SignButton from "../Button/SignButton";
import InputAuth from "./InputAuth";
import styles from "./Login.module.css";

interface IProps {
  setLoginPage: React.Dispatch<React.SetStateAction<boolean>>;
  loginPage: boolean;
}

const Login: React.FC<IProps> = (props: IProps) => {
  const { setLoginPage, loginPage } = props;

  const [formValid, setFormValid] = useState(false);

  const [handleFetch, setHandleFetch] = useState(false);

  return (
    <React.Fragment>
      <div className={styles.container}>
        <form
          name="AuthForm"
          onSubmit={(event) => {
            event.preventDefault();
            setHandleFetch(true);
          }}
        >
          <InputAuth
            setHandleFetch={setHandleFetch}
            handleFetch={handleFetch}
            setFormValid={setFormValid}
            loginPage={loginPage}
          />
          <div className={styles.loginButtonDiv}>
            <Button
              buttonProp={{
                className: styles.loginButton,
                type: "submit",
                disabled: !formValid,
              }}
            >
              <img src={loginLogo} alt="logo" />
            </Button>
          </div>
        </form>
        <div className={styles.divh1}>
          <h1 className={styles.h1}>Don't have an account?</h1>
        </div>
        <SignButton
          buttonDivStyle={styles.loginButtonDiv}
          buttonStyle={styles.signButton}
          handleClick={() => {
            setLoginPage(false);
          }}
          h1Style={styles.logh1}
          buttonDisabled={false}
          buttonType="button"
        />
      </div>
    </React.Fragment>
  );
};

export default Login;
