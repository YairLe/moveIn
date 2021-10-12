import React from "react";
import Button from "./Button";

interface IProps {
  buttonDivStyle: string;
  buttonStyle: string;
  h1Style: string;
  handleClick?: Function;
  buttonDisabled: boolean;
  buttonType: "button" | "submit";
}

const SignButton: React.FC<IProps> = (props: IProps) => {
  const {
    buttonStyle,
    buttonDivStyle,
    handleClick = () => {},
    h1Style,
    buttonDisabled,
    buttonType,
  } = props;
  return (
    <div className={buttonDivStyle}>
      <Button
        buttonProp={{
          className: buttonStyle,
          onClick: () => handleClick(),
          type: buttonType,
          disabled: buttonDisabled,
        }}
      >
        <h1 className={h1Style}>Sign Up</h1>
      </Button>
    </div>
  );
};

export default SignButton;
