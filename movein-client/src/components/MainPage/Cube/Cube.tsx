import React from "react";
import Button from "../../Button/Button";
import styles from "./Cube.module.css";

interface IProps {
  cubeName: string;
  divStyle?: string;
  buttonStyle?: string;
  onClickButton?: Function;
  buttonType?: "button" | "submit" | "reset";
  buttonDisabled?: boolean;
}

const Cube: React.FC<IProps> = (props: IProps) => {
  const {
    cubeName,
    divStyle,
    buttonType = "button",
    buttonStyle,
    buttonDisabled = false,
    onClickButton = () => {},
  } = props;
  return (
    <div className={divStyle}>
      <Button
        buttonProp={{
          className: `${styles.button} ${buttonStyle}`,
          onClick: () => onClickButton(),
          type: buttonType,
          disabled: buttonDisabled,
        }}
      >
        {cubeName}
      </Button>
    </div>
  );
};

export default Cube;
