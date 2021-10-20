import React from "react";
import AreaLogo from "../../../images/Essentials.svg";
import Header from "../../Header/Header";
import HeaderComponent from "../HeaderComponent";
import styles from "./EditEssentials.module.css";
import EditEssentialsForm from "./EditEssentialsForm";

const EditEssentials: React.FC = () => {
  return (
    <React.Fragment>
      <Header
        headerStyle={styles.header}
        image={AreaLogo}
        element={
          <HeaderComponent
            editButtonStyle={styles.editButton}
            headerStyle={styles.div}
          />
        }
      />
      <EditEssentialsForm />
    </React.Fragment>
  );
};

export default EditEssentials;
