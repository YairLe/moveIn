import React from "react";
import ReturnButton from "../Button/ReturnButton";
import { useHistory, useLocation } from "react-router-dom";
import Edit from "../../images/Edit.svg";
import EditButton from "../Button/EditButton";

const HeaderComponent: React.FC = () => {
  const history = useHistory();
  const location = useLocation();

  const navigateHandler = () => {
    location.pathname === "/requirements"
      ? history.push("/main")
      : history.push("/requirements");
  };

  return (
    <div
      style={{
        display: "flex",
        width: "95%",
        height: "4rem",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <ReturnButton
        handleClick={() => {
          navigateHandler();
        }}
      />
      <EditButton
        handleClick={() => {
          console.log("hey");
        }}
      />
    </div>
  );
};

export default HeaderComponent;
