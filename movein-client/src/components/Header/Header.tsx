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
      <img src={image} className="App-logo" alt="logo" />
    </header>
  );
};

export default Header;
