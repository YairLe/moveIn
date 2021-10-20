import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { EditContext } from "../../../context/EditContext";
import EditButton from "../../Button/EditButton";
import Cube from "../Cube/Cube";
import styles from "./Collapse.module.css";
interface IProps {
  collapsed: boolean;
  children: React.ReactNode;
  cubeName: string;
  cubeButtonStyle?: string;
  cubeDivStyle?: string;
}

const Collapse: React.FC<IProps> = (props: IProps) => {
  const { collapsed, children, cubeName, cubeButtonStyle, cubeDivStyle } =
    props;
  const { isEdit: editState } = useContext(EditContext);
  const [isCollapsed, setIsCollapsed] = React.useState(collapsed);

  const history = useHistory();
  return (
    <>
      <div className={styles.divContainer}>
        <div className={styles.divCube}>
          <Cube
            cubeName={cubeName}
            divStyle={cubeDivStyle}
            buttonStyle={`${cubeButtonStyle} ${
              isCollapsed ? styles.buttonCollapsed : styles.buttonExpanded
            }`}
            onClickButton={() => {
              setIsCollapsed(!isCollapsed);
            }}
          />
        </div>
        <div className={styles.divButton}>
          {editState && (
            <EditButton
              handleClick={() => {
                history.push(`/requirements/${cubeName.toLowerCase()}`);
              }}
            />
          )}
        </div>
      </div>

      <div
        className={isCollapsed ? styles.collapsed : styles.expanded}
        aria-expanded={isCollapsed}
      >
        {children}
      </div>
    </>
  );
};

export default Collapse;
