import React from "react";

interface IProps {
  headerStyle?: string;
  element?: React.ReactNode;
  image: string;
}

const Header: React.FC<IProps> = (props: IProps) => {
  const { headerStyle, element, image } = props;
  return (
    <header className={headerStyle}>
      {element}
      <img
        src={image}
        style={{ height: element ? "3rem" : "6rem", pointerEvents: "none" }}
        alt="logo"
      />
    </header>
  );
};

export default Header;
