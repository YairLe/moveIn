import React from "react";
//@ts-ignore
import { useHistory, useLocation } from "react-router-dom";
import EditButton from "../Button/EditButton";
import ReturnButton from "../Button/ReturnButton";

interface IProps {
  handleButtonClick?: Function;
  headerStyle: string;
  editButtonStyle: string;
}

const HeaderComponent: React.FC<IProps> = (props: IProps) => {
  const { headerStyle, editButtonStyle, handleButtonClick = () => {} } = props;
  const history = useHistory();
  const location = useLocation();

  const navigateHandler = () => {
    location.pathname !== "/requirements"
      ? history.push("/requirements")
      : history.push("/main");
  };

  return (
    <div className={headerStyle}>
      <ReturnButton
        handleClick={() => {
          navigateHandler();
        }}
      />
      <div className={editButtonStyle}>
        <EditButton
          handleClick={() => {
            handleButtonClick();
          }}
        />
      </div>
    </div>
  );
};

export default HeaderComponent;
