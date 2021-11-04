import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import newApartmentLogo from "../../images/NewApartment.svg";
import ChangePageButton from "../Button/ChangePageButton";
import ReturnButton from "../Button/ReturnButton";
import SaveButton from "../Button/SaveButton";
import Header from "../Header/Header";
import Input from "../Input/Input";
import HeaderComponent from "../Requirements/HeaderComponent";
import styles from "./NewApartment.module.css";
import NewApartmentFirstPage from "./NewApartmentPages/NewApartmentFirstPage";
import NewApartmentSecondPage from "./NewApartmentPages/NewApartmentSecondPage";
interface IProps {}

const NewApartment: React.FC<IProps> = (props: IProps) => {
  const MIN_PAGE = 1;
  const MAX_PAGE = 3;
  const [pageNumber, setPageNumber] = useState(MIN_PAGE);

  const changePage = () => {
    switch (pageNumber) {
      case 1:
        return <NewApartmentFirstPage />;
      case 2:
        return <NewApartmentSecondPage />;
      default:
        return <div>bye</div>;
    }
  };

  return (
    <React.Fragment>
      <Header
        headerStyle={styles.header}
        image={newApartmentLogo}
        element={
          <HeaderComponent
            editButtonStyle={styles.editButton}
            headerStyle={styles.div}
          />
        }
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: " 100%",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "20%",
              justifyContent: "center",
            }}
          >
            {pageNumber !== MIN_PAGE && (
              <ChangePageButton
                handleClick={() => {
                  setPageNumber((prevState) => prevState - 1);
                }}
                LogoPicker="prev"
              />
            )}
          </div>
          <div
            style={{
              display: "flex",
              width: "80%",
              justifyContent: "center",
            }}
          >
            <h2>
              Page {pageNumber} out of {MAX_PAGE}
            </h2>
          </div>
          <div
            style={{
              width: "20%",
            }}
          >
            {pageNumber !== MAX_PAGE && (
              <ChangePageButton
                handleClick={() => {
                  setPageNumber((prevState) => prevState + 1);
                }}
                LogoPicker="next"
              />
            )}
          </div>
        </div>
        <form>
          {changePage()}
          <SaveButton buttonDisabled={true} />
        </form>
      </div>
    </React.Fragment>
  );
};

export default NewApartment;
