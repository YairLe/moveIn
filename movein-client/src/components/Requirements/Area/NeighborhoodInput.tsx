import React from "react";
import IncreasedInput from "../IncreasedInput";
import styles from "./EditArea.module.css";

interface IProps {
  inputList: Array<string>;
  setInputList: React.Dispatch<React.SetStateAction<string[]>>;
}

const Neighborhood: React.FC<IProps> = (props: IProps) => {
  const { inputList, setInputList } = props;

  return (
    <IncreasedInput
      inputList={inputList}
      setInputList={setInputList}
      element={<p className={styles.cityLabel}>Neighborhoods</p>}
      placeholder="Add Neighborhood"
    />
  );
};

export default Neighborhood;
