import React from "react";
import CollapsedRequirement from "../CollapsedRequirement";
import styles from "./Essentials.module.css";
const NoDataFound = React.lazy(() => import("../NoDataFound"));

interface IProps {
  essentials: string[];
}

const Essentials: React.FC<IProps> = (props: IProps) => {
  const { essentials } = props;

  const checkNotNull = () => {
    return essentials[0] !== "";
  };

  return (
    <CollapsedRequirement cubeName="Essentials">
      {checkNotNull() ? (
        <div className={styles.div}>
          {essentials.map((value, key) => {
            return (
              <div key={key} className={styles.innerDiv}>
                {value}
              </div>
            );
          })}
        </div>
      ) : (
        <NoDataFound />
      )}
    </CollapsedRequirement>
  );
};

export default Essentials;
