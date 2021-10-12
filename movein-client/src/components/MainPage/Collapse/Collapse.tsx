import React from "react";
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
  const [isCollapsed, setIsCollapsed] = React.useState(collapsed);

  return (
    <>
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
