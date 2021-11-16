import React from "react";
import ChangePageButton from "../Button/ChangePageButton";

interface IProps {
  pageNumber: number;
  MIN_PAGE: number;
  MAX_PAGE: number;
  setPageNumber: Function;
}

const PageNavigator: React.FC<IProps> = (props: IProps) => {
  const { pageNumber, MIN_PAGE, MAX_PAGE, setPageNumber } = props;
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: " 100%",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "20%",
            justifyContent: "center",
          }}
        >
          {pageNumber !== MIN_PAGE && (
            <ChangePageButton
              handleClick={() => {
                setPageNumber((prevState: number) => prevState - 1);
              }}
              LogoPicker="prev"
            />
          )}
        </div>
        <div
          style={{
            display: "flex",
            width: "80%",
            justifyContent: "center",
          }}
        >
          <h2>
            Page {pageNumber} out of {MAX_PAGE}
          </h2>
        </div>
        <div
          style={{
            width: "20%",
          }}
        >
          {pageNumber !== MAX_PAGE && (
            <ChangePageButton
              handleClick={() => {
                setPageNumber((prevState: number) => prevState + 1);
              }}
              LogoPicker="next"
            />
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default PageNavigator;
