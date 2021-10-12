import React from "react";
import Button from "../../Button/Button";
import styles from "./Cube.module.css";

interface IProps {
  cubeName: string;
  divStyle?: string;
  buttonStyle?: string;
  onClickButton?: Function;
}

const Cube: React.FC<IProps> = (props: IProps) => {
  const { cubeName, divStyle, buttonStyle, onClickButton = () => {} } = props;
  return (
    <div className={divStyle}>
      <Button
        buttonProp={{
          className: `${styles.button} ${buttonStyle}`,
          onClick: () => onClickButton(),
        }}
      >
        {cubeName}
      </Button>
    </div>
  );
};

export default Cube;
