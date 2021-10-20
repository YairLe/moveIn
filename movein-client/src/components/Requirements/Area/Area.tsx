import React from "react";
import styles from "./Area.module.css";
import CollapsedRequirement from "../CollapsedRequirement";

const Area: React.FC = () => {
  const city = "Haifa";
  const neighborhoods: any = [
    "Bat galim",
    "Kiryat Eliezer",
    "Ramat Hanasi",
    "West Carmel",
    "Ramot Remez",
  ];
  const loopLength = neighborhoods.length;

  const neighborhoodsElements = () => {
    let elementToReturn: any = [];
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
        <div className={styles.div}>
          <div className={styles.divStrong}>
            <strong>{city}</strong>
          </div>
          {neighborhoodsElements()}
        </div>
      </CollapsedRequirement>
    </React.Fragment>
  );
};

export default Area;
