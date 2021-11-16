import React from "react";
import RoomsLogo from "../../../images/Rooms.svg";
import EditButton from "../../Button/EditButton";
import Header from "../../Header/Header";
import HeaderComponent from "../HeaderComponent";
import styles from "./EditRooms.module.css";
import EditRoomsForm from "./EditRoomsForm";

const EditRooms: React.FC = () => {
  return (
    <React.Fragment>
      <Header
        headerStyle={styles.header}
        image={RoomsLogo}
        element={
          <HeaderComponent
            editButtonStyle={styles.editButton}
            headerStyle={styles.div}
            element={<EditButton handleClick={() => {}} />}
          />
        }
      />
      <EditRoomsForm />
    </React.Fragment>
  );
};

export default EditRooms;
