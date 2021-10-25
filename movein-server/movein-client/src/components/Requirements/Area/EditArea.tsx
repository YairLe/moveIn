import React from "react";
import AreaLogo from "../../../images/Area.svg";
import Header from "../../Header/Header";
import HeaderComponent from "../HeaderComponent";
import styles from "./EditArea.module.css";
import EditAreaForm from "./EditAreaForm";

const EditArea: React.FC = () => {
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
      <EditAreaForm />
    </React.Fragment>
  );
};

export default EditArea;
