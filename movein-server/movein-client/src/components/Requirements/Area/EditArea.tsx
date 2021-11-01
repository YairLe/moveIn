import React from "react";
import AreaLogo from "../../../images/Area.svg";
import EditButton from "../../Button/EditButton";
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
            element={<EditButton handleClick={() => {}} />}
          />
        }
      />
      <EditAreaForm />
    </React.Fragment>
  );
};

export default EditArea;
