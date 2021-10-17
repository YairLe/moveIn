import React from "react";
import styles from "./Essentials.module.css";
import CollapsedRequirement from "./CollapsedRequirement";

const Essentials: React.FC = () => {
  const essentials = [
    "AC in all rooms",
    "Parking spot",
    "3 rooms min",
    "Refrigerator",
    "Living room",
  ];

  return (
    <CollapsedRequirement cubeName="Essentials">
      <div className={styles.div}>
        {essentials.map((value) => {
          return <div className={styles.innerDiv}>{value}</div>;
        })}
      </div>
    </CollapsedRequirement>
  );
};

export default Essentials;
