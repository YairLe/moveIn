import React from "react";
//@ts-ignore
import { useHistory, useLocation } from "react-router-dom";
import AddButton from "../Button/AddButton";
import EditButton from "../Button/EditButton";
import ReturnButton from "../Button/ReturnButton";

interface IProps {
  headerStyle: string;
  editButtonStyle: string;
  element?: React.ReactNode;
}

const HeaderComponent: React.FC<IProps> = (props: IProps) => {
  const { headerStyle, editButtonStyle, element } = props;
  const history = useHistory();
  const location = useLocation();
  const [, outerRoute, innerRoute] = location.pathname.split("/");

  const navigateHandler = () => {
    switch (outerRoute) {
      case "requirements":
        if (innerRoute) {
          history.push("/requirements");
        } else {
          history.push("/main");
        }
        break;
      case "apartments": {
        if (innerRoute) {
          history.push("/apartments");
        } else {
          history.push("/main");
        }
        break;
      }
      default: {
        history.push("/main");
        break;
      }
    }
  };

  return (
    <div className={headerStyle}>
      <ReturnButton
        handleClick={() => {
          navigateHandler();
        }}
      />
      <div className={editButtonStyle}>
        <>{element}</>
      </div>
    </div>
  );
};

export default HeaderComponent;
