import React from "react";
import Header from "../components/Header/Header";
import Collapse from "../components/MainPage/Collapse/Collapse";
import HeaderComponent from "../components/Requirements/HeaderComponent";
import Price from "../components/Requirements/Price";
import requirementLogo from "../images/Requirements.svg";
import styles from "./Requirements.module.css";

const Requirements: React.FC = () => {
  return (
    <React.Fragment>
      <Header
        headerStyle={styles.header}
        image={requirementLogo}
        element={<HeaderComponent />}
      />
      <Price />
      <Collapse cubeName="Area" collapsed={false}>
        <h1>bye</h1>
      </Collapse>
      <Collapse cubeName="Rooms" collapsed={false}>
        <h1>bye</h1>
      </Collapse>
      <Collapse cubeName="Essentials" collapsed={false}>
        <h1>bye</h1>
      </Collapse>
    </React.Fragment>
  );
};

export default Requirements;
