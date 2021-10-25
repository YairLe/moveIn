import React from "react";

interface IProps {
  children?: React.ReactNode;
  buttonProp?: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
}

const Button: React.FC<IProps> = (props: IProps) => {
  const { children, buttonProp } = props;
  return <button {...buttonProp}>{children}</button>;
};

export default Button;
