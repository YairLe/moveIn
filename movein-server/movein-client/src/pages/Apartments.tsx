import React from "react";
import { useHistory } from "react-router-dom";
import AddButton from "../components/Button/AddButton";
import Button from "../components/Button/Button";
import Header from "../components/Header/Header";
import HeaderComponent from "../components/Requirements/HeaderComponent";
import ApartmentLogo from "../images/Apartments.svg";
import styles from "./Apartment.module.css";

const Apartments: React.FC = () => {
  const streets = ["Saifan", "Hanneviaim", "Hemda"];
  // each street here has an id and photos ..
  // on cube pressing enter will move to apartment page and
  // fetch it's data using the id
  const history = useHistory();

  const handleButtonClick = () => {
    history.push("apartments/newapartment");
  };

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
                handleAddClick={handleButtonClick}
                divStyle={styles.addDivButton}
                buttonStyle={styles.addButton}
              />
            }
          />
        }
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {streets.map((street, key) => (
          <div
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
            key={key}
          >
            <Button
              buttonProp={{
                style: {
                  justifyContent: "center",
                  backgroundColor: "#155766",
                  height: "8rem",
                  alignItems: "center",
                  display: "flex",
                  width: "80%",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  flexDirection: "column",
                  padding: "0",
                  border: "transparent ",
                  marginBottom: "1rem",
                },
                //   onClick: click moves to apartment page
              }}
            >
              <div
                style={{
                  justifyContent: "center",
                  backgroundColor: "#249eb9",
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
                  //   font-family: "Raleway", sans-serif;
                }}
              >
                {street}
              </div>
            </Button>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Apartments;
