import React, { useContext, useState } from "react";
import { useCookies } from "react-cookie";
import { NewApartmentContext } from "../../context/NewApartmentContext";
import UseAxios from "../../hooks/use-axios";
import newApartmentLogo from "../../images/NewApartment.svg";
import { INewApartment } from "../../interfaces/interfaces";
import ChangePageButton from "../Button/ChangePageButton";
import SaveButton from "../Button/SaveButton";
import Header from "../Header/Header";
import HeaderComponent from "../Requirements/HeaderComponent";
import styles from "./NewApartment.module.css";
import NewApartmentFirstPage from "./NewApartmentPages/NewApartmentFirstPage";
import NewApartmentSecondPage from "./NewApartmentPages/NewApartmentSecondPage";
import NewApartmentThirdPage from "./NewApartmentPages/NewApartmentThirdPage";
interface IProps {}

const NewApartment: React.FC<IProps> = (props: IProps) => {
  const MIN_PAGE = 1;
  const MAX_PAGE = 3;
  const [pageNumber, setPageNumber] = useState(MIN_PAGE);
  const { newApartment, setNewApartment } = useContext(NewApartmentContext);

  const [cookies] = useCookies(["token"]);
  const isShit = Object.keys(newApartment).every((key) => {
    const shit = key as keyof INewApartment;
    if (shit === "comments" || shit === "photos") {
      return true;
    }
    return newApartment[shit] != "" && newApartment[shit] != -10;
  });
  console.log("finally printing", isShit);
  const { loading, fetchData } = UseAxios({
    method: "post",
    url: "/newApartment",
  });

  const getdata = async () => {
    const response = await fetchData(
      { ...newApartment },
      {
        Authorization: `Bearer ${cookies.token}`,
        // "Content-type": "application/json",
      }
    );
    console.log(response.data);
    // if (response.data) {
    //   switch (response.data.message) {
    //     case "No requirements found for user":
    //       alert("make sure to insert data!");
    //       break;
    //     case "User requirement retrived":
    //       localStorage.setItem(
    //         "requirements",
    //         JSON.stringify(response.data.data)
    //       );

    //       setRequirements(response.data.data);
    //       break;
    //   }
    // }
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
        {/* <form
          onSubmit={(event) => {
            event.preventDefault();
            getdata();
          }}
        > */}
        {changePage()}
        {/* <SaveButton buttonDisabled={!isShit} />
        </form> */}
      </div>
    </React.Fragment>
  );
};

export default NewApartment;
