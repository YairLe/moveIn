import React from "react";
import Collapse from "../MainPage/Collapse/Collapse";
import CollapsedRequirement from "./CollapsedRequirement";
import styles from "./Price.module.css";

interface IConfig {
  [key: string]: {
    name: string;
    element: string;
  };
}

const Price: React.FC = () => {
  const minPrice = 2000;
  const maxPrice = 3000;
  const tax = 900;
  const committee = 250;

  const priceConfig: IConfig = {
    rent: {
      name: "Rent",
      element: `${minPrice}-${maxPrice} NIS`,
    },
    tax: {
      name: "Property Tax",
      element: `${tax} NIS max (2 months)`,
    },
    committee: {
      name: "House Committee",
      element: `${committee} NIS max`,
    },
  };

  return (
    <React.Fragment>
      <CollapsedRequirement cubeName="Price">
        <div className={styles.div}>
          {Object.keys(priceConfig).map((value) => {
            return (
              <div className={styles.divElement}>
                <strong>{priceConfig[value].name}&nbsp; </strong>
                <p>{priceConfig[value].element}</p>
              </div>
            );
          })}
        </div>
      </CollapsedRequirement>
    </React.Fragment>
  );
};

export default Price;
