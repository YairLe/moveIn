import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useParams } from "react-router-dom";
import UseAxios from "../../../hooks/use-axios";
import Header from "../../Header/Header";
import HeaderComponent from "../../Requirements/HeaderComponent";
import styles from "./ApartmentView.module.css";
interface IApartmentParams {
  apartmentId: string;
}

const ApartmentView: React.FC = () => {
  const [cookies] = useCookies(["token"]);
  const apartmentParams: IApartmentParams = useParams();
  console.log(apartmentParams.apartmentId);
  const apartmentData = {
    street: "Saifan",
    neighborhood: "Ramat almogi",
    city: "Haifa",
    images: [],
    rent: 3000,
    tax: 1200,
    committe: 120,
    rooms: 4,
    floorMin: 0,
    floorMax: 5,
    comments: [""],
  };

  const priceConfig: any = {
    rent: {
      name: "Rent",
      element: `${3000} NIS`,
    },
    tax: {
      name: "Property Tax",
      element: `${900} NIS (2 months)`,
    },
    committee: {
      name: "House Committee",
      element: `${250} NIS`,
    },
    rooms: {
      name: "Rooms",
      element: `${3}`,
    },
  };
  const { loading, fetchData } = UseAxios({
    method: "get",
    url: `/getUserApartments/${apartmentParams.apartmentId}`,
  });

  useEffect(() => {
    const getData = async () => {
      const response = await fetchData(
        {},
        {
          Authorization: `Bearer ${cookies.token}`,
        }
      );
      //@ts-ignore
      const shit = new Buffer.from(response.data["0"].image.data).toString(
        "base64"
      );
      const newData = response.data.map((apartment: any) => {
        const data = { ...apartment };
        //@ts-ignore
        data.image.data = new Buffer.from(data.image.data).toString("base64");
        return data;
      });
    };
    // getData();
  }, []);

  return (
    <React.Fragment>
      <Header
        headerStyle={styles.header}
        element={
          <div
            style={{
              paddingTop: ".5rem",
              paddingLeft: ".6rem",
              display: "flex",
            }}
          >
            <HeaderComponent
              editButtonStyle={styles.editButton}
              headerStyle={styles.headerStyle}
            />
            <div
              style={{
                display: "flex",
                paddingLeft: "1rem",
                // justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <b className={styles.label}>{apartmentData.street}</b>
              <b className={styles.label}>{apartmentData.neighborhood}</b>
              <b className={styles.label}>{apartmentData.city}</b>
            </div>
          </div>
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
        <div
          style={{
            justifyContent: "center",
            backgroundColor: "#249eb9",
            alignItems: "center",
            display: "flex",
            height: "70%",
          }}
        >
          hey
          {/* <img
                      style={{ height: "100%", aspectRatio: "16/9" }}
                      src={`data:image/jpeg;base64,${apartments[objectKey]["image"].data}`}
                      alt="apartmentImage"
                    /> */}
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
          bye
        </div>
      </div>
      <div className={styles.div}>
        {Object.keys(priceConfig).map((value, key) => {
          return (
            <div key={key} className={styles.divElement}>
              <strong>{priceConfig[value].name}&nbsp; </strong>
              <p>{priceConfig[value].element}</p>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default ApartmentView;
