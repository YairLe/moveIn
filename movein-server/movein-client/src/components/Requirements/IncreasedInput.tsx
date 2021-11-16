import React, { useContext, useEffect } from "react";
import { NewApartmentContext } from "../../context/NewApartmentContext";
import AddButton from "../Button/AddButton";
import Input from "../Input/Input";
import styles from "./IncreasedInput.module.css";

interface IProps {
  element?: React.ReactNode;
  placeholder: string;
  inputList: string[];
  setInputList: React.Dispatch<React.SetStateAction<string[]>>;
}

const IncreasedInput: React.FC<IProps> = (props: IProps) => {
  const { element, placeholder, inputList, setInputList } = props;
  const { newApartment, setNewApartment } = useContext(NewApartmentContext);

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value, id } = e.target;
    const list: string[] = [...inputList];
    list[+id] = value;
    setInputList(list);
  };

  const handleAddClick = () => {
    setInputList([...inputList, ""]);
  };

  const inputListProp = {
    type: "text",
    onChange: handleInputChange,
    placeholder: placeholder,
    className: styles.inputList,
  };

  useEffect(() => {
    const apartmentElement = { ...newApartment };
    apartmentElement.comments =
      inputList.length !== 1
        ? inputList.filter((value) => value !== "")
        : inputList;
    setNewApartment(apartmentElement);
  }, [inputList]);

  return (
    <React.Fragment>
      {element}

      <div
        style={{
          height: `${3 * inputList.length}rem`,
        }}
        className={styles.inputListDiv}
      >
        <AddButton
          handleAddClick={handleAddClick}
          divStyle={styles.addDivButton}
          buttonStyle={styles.addButton}
        />
        {inputList.map((value: string, key: number) => {
          return (
            <div key={key} className={styles.inputListContainerDiv}>
              <Input
                inputProp={{
                  ...inputListProp,
                  value: value,
                  id: `${key}`,
                  name: `input${key}`,
                }}
                inputInValid={false}
                inputInValidText={""}
              />
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default IncreasedInput;
