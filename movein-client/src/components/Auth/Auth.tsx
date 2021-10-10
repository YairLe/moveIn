import React, { useState } from "react";
import logo from "../../images/MoveIn.svg";
import ReturnButton from "../Button/ReturnButton";
import styles from "./Auth.module.css";
import Login from "./Login";
import Signup from "./Signup";

const Auth: React.FC = () => {
  const [loginPage, setLoginPage] = useState(false);

  const onSubmitFormHandler: React.FormEventHandler<HTMLFormElement> = (
    event
  ) => {
    event.preventDefault();
    if (loginPage) {
    } else {
    }
  };

  return (
    <React.Fragment>
      <header className={styles.auth}>
        {!loginPage && (
          <ReturnButton
            handleClick={() => {
              setLoginPage(true);
            }}
          />
        )}

        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <form name="AuthForm" onSubmit={onSubmitFormHandler}>
        {loginPage ? (
          <Login setLoginPage={setLoginPage} />
        ) : (
          <Signup setLoginPage={setLoginPage} />
        )}
      </form>
    </React.Fragment>
  );
};

export default Auth;
