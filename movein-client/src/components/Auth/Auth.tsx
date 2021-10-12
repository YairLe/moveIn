import React, { useState } from "react";
import logo from "../../images/MoveIn.svg";
import ReturnButton from "../Button/ReturnButton";
import Header from "../Header/Header";
import styles from "./Auth.module.css";
import Login from "./Login";
import Signup from "./Signup";

const Auth: React.FC = () => {
  const [loginPage, setLoginPage] = useState(true);

  return (
    <React.Fragment>
      <Header
        headerStyle={styles.auth}
        image={logo}
        element={
          !loginPage ? (
            <ReturnButton
              handleClick={() => {
                setLoginPage(true);
              }}
            />
          ) : null
        }
      />

      {loginPage ? (
        <Login setLoginPage={setLoginPage} loginPage={loginPage} />
      ) : (
        <Signup setLoginPage={setLoginPage} loginPage={loginPage} />
      )}
    </React.Fragment>
  );
};

export default Auth;
