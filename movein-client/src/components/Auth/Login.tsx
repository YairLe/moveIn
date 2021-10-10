import React from "react";
import Input from "../Input/Input";
import loginLogo from "../../images/LogIn.svg";
import styles from "./Login.module.css";
import Button from "../Button/Button";
import InputAuth from "./InputAuth";
import SignButton from "../Button/SignButton";

interface IProps {
  setLoginPage: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: React.FC<IProps> = (props: IProps) => {
  const { setLoginPage } = props;

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
        <SignButton
          buttonDivStyle={styles.loginButtonDiv}
          buttonStyle={styles.signButton}
          handleClick={() => {
            setLoginPage(false);
          }}
          h1Style={styles.logh1}
        />
      </div>
    </React.Fragment>
  );
};

export default Login;
