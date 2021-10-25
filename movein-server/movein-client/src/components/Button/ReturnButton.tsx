import React from "react";
import Button from "./Button";
import styles from "./ReturnButton.module.css";

interface IProps {
  handleClick: Function;
}

const ReturnButton: React.FC<IProps> = (props: IProps) => {
  const { handleClick } = props;

  return (
    <div className={styles.div}>
      <Button
        buttonProp={{
          className: styles.button,
          onClick: () => {
            handleClick();
          },
        }}
      ></Button>
    </div>
  );
};

export default ReturnButton;
