import React from "react";
import CollapsedRequirement from "../CollapsedRequirement";
import styles from "./Area.module.css";
const NoDataFound = React.lazy(() => import("../NoDataFound"));

interface IProps {
  city: string;
  neighborhoods: string[];
}

const Area: React.FC<IProps> = (props: IProps) => {
  const { city, neighborhoods } = props;

  const checkNotNull = () => {
    return city;
  };

  const loopLength = neighborhoods.length;

  const neighborhoodsElements = () => {
    let elementToReturn: Array<React.ReactNode> = [];
    let i = 0;
    for (; i <= loopLength / 2; i += 2) {
      elementToReturn.push(
        <div key={i} className={styles.divElement}>
          <p>{neighborhoods[i]}</p>

          <p>{neighborhoods[i + 1]}</p>
        </div>,
      );
    }
    if (loopLength % 2 !== 0 && loopLength > 1) {
      elementToReturn.push(
        <div key={neighborhoods[loopLength - 1]} className={styles.divElement}>
          {neighborhoods[loopLength - 1]}
        </div>,
      );
    }
    return elementToReturn;
  };
  return (
    <React.Fragment>
      <CollapsedRequirement cubeName="Area">
        {checkNotNull() ? (
          <div className={styles.div}>
            <div className={styles.divStrong}>
              <strong>{city}</strong>
            </div>
            {neighborhoodsElements()}
          </div>
        ) : (
          <NoDataFound />
        )}
      </CollapsedRequirement>
    </React.Fragment>
  );
};

export default Area;
