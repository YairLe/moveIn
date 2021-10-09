import React from "react";
import logo from "../../images/MoveIn.svg";
import arrow from "../../images/Arrow.svg";
import Login from "./Login";
import styles from "./Auth.module.css";
import Signup from "./Signup";
import Button from "../Button/Button";

const Auth: React.FC = () => {
  const isLoggedIn = false;

  return (
    <React.Fragment>
      <header className={styles.auth}>
        <Button
          buttonProp={{
            className: styles.button,
            onClick: () => {
              console.log("click");
            },
          }}
        />

        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {isLoggedIn ? <Login /> : <Signup />}
    </React.Fragment>
  );
};

export default Auth;
