import React, { useContext } from "react";
import Header from "../components/Header/Header";
import Area from "../components/Requirements/Area/Area";
import Essentials from "../components/Requirements/Essentials/Essentials";
import HeaderComponent from "../components/Requirements/HeaderComponent";
import Price from "../components/Requirements/Price/Price";
import Rooms from "../components/Requirements/Rooms/Rooms";
import { EditContext } from "../context/EditContext";
import requirementLogo from "../images/Requirements.svg";
import styles from "./Requirements.module.css";

const Requirements: React.FC = () => {
  const { setIsEdit: setEditState } = useContext(EditContext);
  const handleEditState = () => {
    setEditState();
  };

  return (
    <React.Fragment>
      <Header
        headerStyle={styles.header}
        image={requirementLogo}
        element={
          <HeaderComponent
            editButtonStyle={styles.editButton}
            headerStyle={styles.div}
            handleButtonClick={handleEditState}
          />
        }
      />
      <Price />
      <Area />
      <Rooms />
      <Essentials />
    </React.Fragment>
  );
};

export default Requirements;
