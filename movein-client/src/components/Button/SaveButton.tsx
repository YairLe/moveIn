import React from "react";
import Cube from "../MainPage/Cube/Cube";
import styles from "./SaveButton.module.css";

interface IProps {
  buttonDisabled: boolean;
}

const SaveButton: React.FC<IProps> = (props: IProps) => {
  const { buttonDisabled } = props;

  return (
    <div>
      <Cube
        divStyle={styles.divStyle}
        buttonStyle={styles.buttonStyle}
        cubeName="Save"
        buttonType="submit"
        buttonDisabled={buttonDisabled}
      />
    </div>
  );
};

export default SaveButton;
