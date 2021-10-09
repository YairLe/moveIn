import React from "react";
import Input from "../Input/Input";
import loginLogo from "../../images/LogIn.svg";
import styles from "./Login.module.css";
import Button from "../Button/Button";
import InputAuth from "./InputAuth";

const Login: React.FC = () => {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <InputAuth />
        <div className={styles.loginButtonDiv}>
          <Button
            buttonProp={{
              className: styles.loginButton,
            }}
          >
            <img src={loginLogo} alt="logo" />
          </Button>
        </div>
        <div className={styles.divh1}>
          <h1 className={styles.h1}>Don't have an account?</h1>
        </div>
        <div className={styles.loginButtonDiv}>
          <Button
            buttonProp={{
              className: styles.signButton,
            }}
          >
            <h1 className={styles.signh1}>Sign Up</h1>
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
