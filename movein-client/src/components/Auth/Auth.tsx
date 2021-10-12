import React, { useState } from "react";
import logo from "../../images/MoveIn.svg";
import ReturnButton from "../Button/ReturnButton";
import styles from "./Auth.module.css";
import Login from "./Login";
import Signup from "./Signup";

const Auth: React.FC = () => {
  const [loginPage, setLoginPage] = useState(true);

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

      {loginPage ? (
        <Login setLoginPage={setLoginPage} loginPage={loginPage} />
      ) : (
        <Signup setLoginPage={setLoginPage} loginPage={loginPage} />
      )}
    </React.Fragment>
  );
};

export default Auth;
