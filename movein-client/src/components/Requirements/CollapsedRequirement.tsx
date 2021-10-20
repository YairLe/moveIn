import React from "react";
import Collapse from "../MainPage/Collapse/Collapse";
import styles from "./CollapsedRequirement.module.css";

interface IProps {
  children: React.ReactNode;
  cubeName: string;
}

const CollapsedRequirement: React.FC<IProps> = (props: IProps) => {
  const { children, cubeName } = props;
  return (
    <Collapse
      cubeName={cubeName}
      collapsed={true}
      cubeButtonStyle={styles.cubeButton}
      cubeDivStyle={styles.cubeDiv}
    >
      {children}
    </Collapse>
  );
};

export default CollapsedRequirement;
