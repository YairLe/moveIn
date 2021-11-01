import React from "react";
import AddButton from "../components/Button/AddButton";
import Button from "../components/Button/Button";
import Header from "../components/Header/Header";
import HeaderComponent from "../components/Requirements/HeaderComponent";
import ApartmentLogo from "../images/Apartments.svg";
import styles from "./Apartment.module.css";

const Apartment: React.FC = () => {
  const streets = ["Saifan", "Hanneviaim", "Hemda"];
  //each street here has an id and photos ..
  // on cube pressing enter will move to apartment page and
  // fetch it's data using the id
  return (
    <React.Fragment>
      <Header
        headerStyle={styles.header}
        image={ApartmentLogo}
        element={
          <HeaderComponent
            editButtonStyle={styles.editButton}
            headerStyle={styles.div}
            element={
              <AddButton
                handleAddClick={() => {
                  //navigate to add new apartments
                  // handleButtonClick();
                }}
              />
            }
          />
        }
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* <Button style={{}}> */}
        <div
          style={{
            justifyContent: "center",
            backgroundColor: "#132023",
            height: "8rem",
            alignItems: "center",
            display: "flex",
            width: "80%",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              justifyContent: "center",
              backgroundColor: "#118fac",
              alignItems: "center",
              display: "flex",
              width: "90%",
              height: "70%",
            }}
          >
            hey
          </div>
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              color: "white",
            }}
          >
            Street
          </div>
        </div>
      </div>
      {/* </Button> */}
    </React.Fragment>
  );
};

export default Apartment;
