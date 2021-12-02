import React, { useContext, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";
import AddButton from "../components/Button/AddButton";
import Button from "../components/Button/Button";
import Header from "../components/Header/Header";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import HeaderComponent from "../components/Requirements/HeaderComponent";
import { ApartmentsContext } from "../context/ApartmentsContext";
import UseAxios from "../hooks/use-axios";
import ApartmentLogo from "../images/Apartments.svg";
import styles from "./Apartment.module.css";

const Apartments: React.FC = () => {
  const { apartments, setApartments } = useContext(ApartmentsContext);
  const history = useHistory();
  const [cookies] = useCookies(["token"]);
  const { loading, fetchData } = UseAxios({
    method: "get",
    url: "/getUserApartments",
  });

  const handleButtonClick = () => {
    history.push("apartments/newapartment");
  };

  const navigateToApartment = (apartmentId: string) => {
    history.push(`apartments/${apartmentId}`);
  };

  useEffect(() => {
    let isSubscribed = true;
    const getData = async () => {
      const response = await fetchData(
        {},
        {
          Authorization: `Bearer ${cookies.token}`,
        }
      );
      if (isSubscribed) {
        const newData = response.data.map((apartment: any) => {
          const data = { ...apartment };
          //@ts-ignore
          data.image.data = new Buffer.from(data.image.data).toString("base64");
          return data;
        });
        setApartments(newData);
      }
    };
    if (
      history.action === "POP" ||
      !history.location.state ||
      (history.location.state &&
        (history.location.state as any)["from"] === "/apartments/newapartment")
    ) {
      getData();
    }

    return () => {
      isSubscribed = false;
    };
  }, []);

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

      <div className={styles.apartmentsDiv}>
        {apartments.length === 0 && loading ? (
          <div
            style={{
              height: "70vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <LoadingSpinner />
          </div>
        ) : (
          <>
            {Object.keys(apartments).map((objectKey: any) => (
              <div
                style={{
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
                key={objectKey}
              >
                <Button
                  buttonProp={{
                    className: styles.navigateButton,
                    onClick: () =>
                      navigateToApartment(apartments[objectKey].apartmentId),
                    //   onClick: click moves to apartment page
                  }}
                >
                  <div
                    style={{
                      justifyContent: "center",
                      backgroundColor: "#249eb9",
                      alignItems: "center",
                      display: "flex",
                      height: "70%",
                    }}
                  >
                    <img
                      style={{ height: "100%", aspectRatio: "16/9" }}
                      src={`data:image/jpeg;base64,${apartments[objectKey]["image"].data}`}
                      alt="apartmentImage"
                    />
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
                    {apartments[objectKey].street}
                  </div>
                </Button>
              </div>
            ))}
          </>
        )}
      </div>
    </React.Fragment>
  );
};

export default Apartments;
