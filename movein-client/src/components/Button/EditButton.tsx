import React from "react";
import Button from "./Button";
import styles from "./EditButton.module.css";

interface IProps {
  handleClick: Function;
}

const EditButton: React.FC<IProps> = (props: IProps) => {
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

export default EditButton;
