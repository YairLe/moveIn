import React, { useContext, useEffect } from "react";
import { useCookies } from "react-cookie";
import EditButton from "../components/Button/EditButton";
import Header from "../components/Header/Header";
import HeaderComponent from "../components/Requirements/HeaderComponent";
import { EditContext } from "../context/EditContext";
import { RequirementsContext } from "../context/RequirementsContext";
import UseAxios from "../hooks/use-axios";
import requirementLogo from "../images/Requirements.svg";
import styles from "./Requirements.module.css";

const Price = React.lazy(
  () => import("../components/Requirements/Price/Price")
);
const Area = React.lazy(() => import("../components/Requirements/Area/Area"));
const Rooms = React.lazy(
  () => import("../components/Requirements/Rooms/Rooms")
);
const Essentials = React.lazy(
  () => import("../components/Requirements/Essentials/Essentials")
);

const Requirements: React.FC = () => {
  const { setIsEdit: setEditState } = useContext(EditContext);
  const [cookies] = useCookies(["token"]);
  const { requirements, setRequirements } = useContext(RequirementsContext);
  const { loading, fetchData } = UseAxios({
    method: "get",
    url: "/getRequirement",
  });

  const handleEditState = () => {
    setEditState();
  };

  useEffect(() => {
    const getdata = async () => {
      const response = await fetchData(
        {},
        {
          Authorization: `Bearer ${cookies.token}`,
          "Content-type": "application/json",
        }
      );
      if (response.data) {
        switch (response.data.message) {
          case "No requirements found for user":
            alert("make sure to insert data!");
            break;
          case "User requirement retrived":
            localStorage.setItem(
              "requirements",
              JSON.stringify(response.data.data)
            );

            setRequirements(response.data.data);
            break;
        }
      }
    };
    getdata();
  }, []);

  return (
    <React.Fragment>
      <Header
        headerStyle={styles.header}
        image={requirementLogo}
        element={
          <HeaderComponent
            editButtonStyle={styles.editButton}
            headerStyle={styles.div}
            element={<EditButton handleClick={handleEditState} />}
          />
        }
      />
      <Price
        minPrice={requirements.minPrice}
        maxPrice={requirements.maxPrice}
        tax={requirements.tax}
        committee={requirements.committee}
      />
      <Area
        city={requirements.city}
        neighborhoods={requirements.neighborhood}
      />
      <Rooms
        minRooms={requirements.minRooms}
        maxRooms={requirements.maxRooms}
      />
      <Essentials essentials={requirements.essentials} />
    </React.Fragment>
  );
};

export default Requirements;
