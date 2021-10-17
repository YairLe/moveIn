import React from "react";
import styles from "./Rooms.module.css";
import CollapsedRequirement from "./CollapsedRequirement";

const Rooms: React.FC = () => {
  const minRooms = 3;
  const maxRooms = 3.5;
  return (
    <React.Fragment>
      <CollapsedRequirement cubeName="Rooms">
        <div className={styles.div}>
          <div>
            {minRooms} - {maxRooms}
          </div>
          <strong>Rooms</strong>
        </div>
      </CollapsedRequirement>
    </React.Fragment>
  );
};

export default Rooms;
