import React from "react";
import Button from "./Button";

interface IProps {
  buttonDivStyle: any;
  buttonStyle: any;
  h1Style: any;
  handleClick: Function;
}

const SignButton: React.FC<IProps> = (props: IProps) => {
  const { buttonStyle, buttonDivStyle, handleClick, h1Style } = props;
  return (
    <div className={buttonDivStyle}>
      <Button
        buttonProp={{
          className: buttonStyle,
          onClick: () => handleClick(),
        }}
      >
        <h1 className={h1Style}>Sign Up</h1>
      </Button>
    </div>
  );
};

export default SignButton;
