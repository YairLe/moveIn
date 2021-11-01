import React from "react";
import priceLogo from "../../../images/Price.svg";
import EditButton from "../../Button/EditButton";
import Header from "../../Header/Header";
import HeaderComponent from "../HeaderComponent";
import styles from "./EditPrice.module.css";
import EditPriceForm from "./EditPriceForm";

const EditPrice: React.FC = () => {
  return (
    <React.Fragment>
      <Header
        headerStyle={styles.header}
        image={priceLogo}
        element={
          <HeaderComponent
            editButtonStyle={styles.editButton}
            headerStyle={styles.div}
            element={<EditButton handleClick={() => {}} />}
          />
        }
      />
      <EditPriceForm />
    </React.Fragment>
  );
};

export default EditPrice;
