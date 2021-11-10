import React, { useContext, useState } from "react";
import { useCookies } from "react-cookie";
import { NewApartmentContext } from "../../../context/NewApartmentContext";
import UseAxios from "../../../hooks/use-axios";
import useInput from "../../../hooks/use-input";
import SaveButton from "../../Button/SaveButton";
import Input from "../../Input/Input";
import IncreasedInput from "../../Requirements/IncreasedInput";
import InputTextForm from "../InputTextForm";
import styles from "../NewApartment.module.css";

const NewApartmentThirdPage: React.FC = () => {
  const { newApartment, setNewApartment } = useContext(NewApartmentContext);

  const [inputList, setInputList] = useState<string[]>(newApartment.comments);
  const [imgValue, setImgValue] = useState<any>();
  const validator = (value: string) => /^\d+$/.test(value) && +value > 0;

  const [cookies] = useCookies(["token"]);

  const { loading, fetchData } = UseAxios({
    method: "post",
    url: "/upload",
  });

  const getdata = async () => {
    const response = await fetchData(
      { imgValue },
      {
        Authorization: `Bearer ${cookies.token}`,
        enctype: "multipart/form-data",
        // "Content-type": "application/json",
      }
    );
    console.log(response.data);
    // if (response.data) {
    //   switch (response.data.message) {
    //     case "No requirements found for user":
    //       alert("make sure to insert data!");
    //       break;
    //     case "User requirement retrived":
    //       localStorage.setItem(
    //         "requirements",
    //         JSON.stringify(response.data.data)
    //       );

    //       setRequirements(response.data.data);
    //       break;
    //   }
    // }
  };

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
    console.log(event.target.value);
    const element = { ...newApartment };
    element.photos = event.target.value;
    // setNewApartment(element);
    setImgValue(event.target.value);
    // setInputSettings((prevState) => {
    //   return { ...prevState, enteredValue: event.target.value };
    // });
  };
  console.log(newApartment);
  //   console.log("value is", value);
  return (
    <React.Fragment>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          getdata();
        }}
      >
        <div className={styles.inputDiv}>
          <input
            type="file"
            name="pic"
            multiple={false}
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
        <SaveButton buttonDisabled={false} />
      </form>

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
