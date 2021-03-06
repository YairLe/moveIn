import React from "react";
import Header from "../components/Header/Header";
import styles from "./MainPage.module.css";
import logo from "../images/MoveIn.svg";
import Cube from "../components/MainPage/Cube/Cube";
//@ts-ignore
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";

const MainPage: React.FC = () => {
  const [cookies] = useCookies(["login"]);
  const nameOfTheUser = cookies.login.userName;
  const history = useHistory();

  return (
    <React.Fragment>
      <Header headerStyle={styles.auth} image={logo} />
      <div className={styles.divTitle}>
        <h1 className={styles.h1Title}>Hello {nameOfTheUser}!</h1>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Cube
          cubeName="Requirements"
          divStyle={styles.cubeDiv}
          buttonStyle={styles.cubeButton}
          onClickButton={() => {
            history.push("/requirements");
          }}
        />
        <Cube
          cubeName="Apartments"
          divStyle={styles.cubeDiv}
          buttonStyle={styles.cubeButton}
          onClickButton={() => {
            history.push("/apartments");
          }}
        />
      </div>
    </React.Fragment>
  );
};

export default MainPage;
