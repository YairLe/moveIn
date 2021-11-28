import React, { useContext, useState } from "react";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";
import { NewApartmentContext } from "../../context/NewApartmentContext";
import UseAxios from "../../hooks/use-axios";
import newApartmentLogo from "../../images/NewApartment.svg";
import { INewApartment } from "../../interfaces/interfaces";
import SaveButton from "../Button/SaveButton";
import Header from "../Header/Header";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import HeaderComponent from "../Requirements/HeaderComponent";
import styles from "./NewApartment.module.css";
import NewApartmentFirstPage from "./NewApartmentPages/NewApartmentFirstPage";
import NewApartmentSecondPage from "./NewApartmentPages/NewApartmentSecondPage";
import NewApartmentThirdPage from "./NewApartmentPages/NewApartmentThirdPage";
import PageNavigator from "./PageNavigator";

const NewApartment: React.FC = () => {
  const MIN_PAGE = 1;
  const MAX_PAGE = 3;
  const [pageNumber, setPageNumber] = useState(MIN_PAGE);
  const { newApartment } = useContext(NewApartmentContext);
  const history = useHistory();

  const [cookies] = useCookies(["token"]);
  const isButtonDisabled = Object.keys(newApartment).every((key) => {
    const newApartmentKeys = key as keyof INewApartment;
    if (newApartmentKeys === "comments") {
      return true;
    }
    return (
      String(newApartment[newApartmentKeys]) !== "" &&
      Number(newApartment[newApartmentKeys]) !== -10 &&
      String(newApartment[newApartmentKeys]) !== "empty"
    );
  });
  const { loading, fetchData } = UseAxios({
    method: "post",
    url: "/newApartment",
  });

  const sendData = async () => {
    const formData = new FormData();
    Object.keys(newApartment.photos).forEach((key: any) => {
      const newApartmentKeys = key as keyof {};
      formData.append("files", newApartment.photos[newApartmentKeys]);
    });
    const { photos, ...dataToStringify } = newApartment;
    formData.append("json", JSON.stringify(dataToStringify));
    const response = await fetchData(formData, {
      Authorization: `Bearer ${cookies.token}`,
      ContentType: `multipart/form-data`,
    });
    if (response.data) {
      switch (response.data.message) {
        case "Apartment added successfully.":
          alert("Apartment added successfully!");
          history.push("/apartments");
          break;
        default:
          alert("some error occured!");
          break;
      }
    }
  };

  const changePage = () => {
    switch (pageNumber) {
      case 1:
        return <NewApartmentFirstPage />;
      case 2:
        return <NewApartmentSecondPage />;
      default:
        return <NewApartmentThirdPage />;
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
        <PageNavigator
          pageNumber={pageNumber}
          MIN_PAGE={MIN_PAGE}
          MAX_PAGE={MAX_PAGE}
          setPageNumber={setPageNumber}
        />
        <form
          onSubmit={(event) => {
            event.preventDefault();
            sendData();
          }}
        >
          {changePage()}
          {pageNumber === MAX_PAGE && !loading && (
            <SaveButton buttonDisabled={!isButtonDisabled} />
          )}
          {loading && (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <LoadingSpinner />
            </div>
          )}
        </form>
      </div>
    </React.Fragment>
  );
};

export default NewApartment;
