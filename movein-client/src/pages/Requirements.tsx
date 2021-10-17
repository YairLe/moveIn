import React from "react";
import Header from "../components/Header/Header";
import Collapse from "../components/MainPage/Collapse/Collapse";
import Area from "../components/Requirements/Area";
import Essentials from "../components/Requirements/Essentials";
import HeaderComponent from "../components/Requirements/HeaderComponent";
import Price from "../components/Requirements/Price";
import Rooms from "../components/Requirements/Rooms";
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
      <Area />
      <Rooms />
      <Essentials />
    </React.Fragment>
  );
};

export default Requirements;
