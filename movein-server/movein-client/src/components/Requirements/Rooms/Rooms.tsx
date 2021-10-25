import React from "react";
import CollapsedRequirement from "../CollapsedRequirement";
import styles from "./Rooms.module.css";
const NoDataFound = React.lazy(() => import("../NoDataFound"));

interface IProps {
  minRooms: number;
  maxRooms: number;
}

const Rooms: React.FC<IProps> = (props: IProps) => {
  const { maxRooms, minRooms } = props;
  const checkNotNull = () => {
    return maxRooms > 1;
  };

  return (
    <React.Fragment>
      <CollapsedRequirement cubeName="Rooms">
        {checkNotNull() ? (
          <div className={styles.div}>
            <div>
              {minRooms} - {maxRooms}
            </div>
            <strong>Rooms</strong>
          </div>
        ) : (
          <NoDataFound />
        )}
      </CollapsedRequirement>
    </React.Fragment>
  );
};

export default Rooms;
