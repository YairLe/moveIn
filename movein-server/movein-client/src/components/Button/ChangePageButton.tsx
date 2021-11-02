import React from "react";
import Button from "./Button";
import styles from "./ChangePageButton.module.css";

interface IProps {
  handleClick: Function;
  LogoPicker: "prev" | "next";
}

const ChangePageButton: React.FC<IProps> = (props: IProps) => {
  const { handleClick, LogoPicker } = props;

  return (
    <div className={styles.div}>
      <Button
        buttonProp={{
          className: `${styles.button} ${
            LogoPicker === "prev" ? styles.buttonPrev : styles.buttonNext
          }`,
          onClick: () => {
            handleClick();
          },
        }}
      ></Button>
    </div>
  );
};

export default ChangePageButton;
