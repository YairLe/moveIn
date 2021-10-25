import React from "react";
import CollapsedRequirement from "../CollapsedRequirement";
import styles from "./Price.module.css";
const NoDataFound = React.lazy(() => import("../NoDataFound"));

interface IProps {
  minPrice: number;
  maxPrice: number;
  tax: number;
  committee: number;
}

interface IConfig {
  [key: string]: {
    name: string;
    element: string;
  };
}

const Price: React.FC<IProps> = (props: IProps) => {
  const { minPrice, maxPrice, tax, committee } = props;

  const checkNotNull = () => {
    return maxPrice !== 1;
  };

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
        {checkNotNull() ? (
          <div className={styles.div}>
            {Object.keys(priceConfig).map((value, key) => {
              return (
                <div key={key} className={styles.divElement}>
                  <strong>{priceConfig[value].name}&nbsp; </strong>
                  <p>{priceConfig[value].element}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <NoDataFound />
        )}
      </CollapsedRequirement>
    </React.Fragment>
  );
};

export default Price;
