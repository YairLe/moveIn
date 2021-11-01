import React from "react";
import Button from "./Button";
import styles from "./AddButton.module.css";

interface IProps {
  handleAddClick: React.MouseEventHandler<HTMLButtonElement>;
  divStyle: string;
  buttonStyle: string;
}

const AddButton: React.FC<IProps> = (props: IProps) => {
  const { handleAddClick, divStyle, buttonStyle } = props;
  return (
    <div className={divStyle}>
      <Button
        buttonProp={{
          type: "button",
          onClick: handleAddClick,
          className: buttonStyle,
        }}
      >
        <div className={styles.span}>&#43;</div>
      </Button>
    </div>
  );
};

export default AddButton;
