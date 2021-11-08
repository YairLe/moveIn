import React, { useContext, useState } from "react";
import { NewApartmentContext } from "../../../context/NewApartmentContext";
import useInput from "../../../hooks/use-input";
import Input from "../../Input/Input";
import IncreasedInput from "../../Requirements/IncreasedInput";
import InputTextForm from "../InputTextForm";
import styles from "../NewApartment.module.css";

const NewApartmentThirdPage: React.FC = () => {
  const { newApartment, setNewApartment } = useContext(NewApartmentContext);

  const [inputList, setInputList] = useState<string[]>(newApartment.comments);
  const [imgValue, setImgValue] = useState<any>();
  const validator = (value: string) => /^\d+$/.test(value) && +value > 0;
  //   const {
  //     value,
  //     isValid,
  //     notifyInvalidValue,
  //     inputSettingsChangeHandler,
  //     inputBlur,
  //   } = useInput(() => {}, "");

  //   const inputProp = {
  //     type: "file",
  //     id: "fileUpload",
  //     multiple: true,
  //     // name: name,
  //     value: value,
  //     onChange: inputSettingsChangeHandler,
  //     onBlur: inputBlur,
  //     // min: 0,
  //   };

  const changeFile: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(event.target.files);
    // setInputSettings((prevState) => {
    //   return { ...prevState, enteredValue: event.target.value };
    // });
  };
  //   console.log("value is", value);
  return (
    <React.Fragment>
      <div className={styles.inputDiv}>
        <input
          type="file"
          multiple
          value={imgValue}
          id="fileUpload"
          onChange={changeFile}
        />

        {/* <InputTextForm
          {...inputTextProp}
          id="Rooms"
          name="Rooms"
          label="Rooms"
          type="number"
          inputStyle={styles.input}
          labelStyle={styles.label}
        /> */}
      </div>
      {/* <div className={styles.inputDivSecondPage}>
        <InputTextForm
          {...inputTextProp}
          id="FloorMin"
          name="FloorMin"
          label="Floor"
          type="number"
          inputStyle={styles.inputFloor}
          labelStyle={styles.labelFloor}
        />
        <InputTextForm
          {...inputTextProp}
          id="FloorMax"
          name="FloorMax"
          label="out of"
          type="number"
          inputStyle={styles.inputFloor}
          labelStyle={styles.labelFloor}
        />
      </div> */}

      {/* <IncreasedInput
        inputList={inputList}
        setInputList={setInputList}
        placeholder="Add Comments"
        element={
          <p style={{ paddingLeft: ".5rem" }} className={styles.label}>
            Comments
          </p>
        }
      /> */}
    </React.Fragment>
  );
};

export default NewApartmentThirdPage;
