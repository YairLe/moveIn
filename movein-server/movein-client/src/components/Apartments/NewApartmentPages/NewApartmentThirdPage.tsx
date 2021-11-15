import React, { useContext, useEffect, useState } from "react";
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
    console.log(imgValue, "the form data is");
    const formData = new FormData();
    formData.append("files", imgValue);
    const response = await fetchData(formData, {
      Authorization: `Bearer ${cookies.token}`,
      // encType: "multipart/form-data",
      ContentType: `multipart/form-data`,
      // "Content-Type": "multipart/form-data",
      // "Content-type": "application/json",
    });
    // console.log(response.data);
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
    console.log(event, "printing event");
    const element = { ...newApartment };
    element.photos = event.target.value;
    // setNewApartment(element);
    console.log(
      event.target.files ? event.target.files[0] : null,
      "changed file"
    );
    setImgValue(event.target.files ? event.target.files[0] : null);
    // setInputSettings((prevState) => {
    //   return { ...prevState, enteredValue: event.target.value };
    // });
  };

  useEffect(() => {
    console.log(imgValue);
    if (imgValue) {
      console.log(imgValue, "the image value is");
      getdata();
    }
  }, [imgValue]);

  console.log(newApartment);
  //   console.log("value is", value);
  return (
    <React.Fragment>
      {/* <form
        action="http://localhost:8080/upload"
        encType="multipart/form-data"
        method="POST"
      >
        <input type="file" name="pic" />
        <input type="submit" value="Upload a file" />
      </form> */}
      <form
        // action="http://localhost:8080/upload"
        // encType="multipart/form-data"
        // method="POST"
        onSubmit={(event) => {
          event.preventDefault();
          // getdata();
        }}
      >
        <div className={styles.inputDiv}>
          <input
            type="file"
            name="pic"
            multiple={false}
            // value={imgValue}
            id="fileUpload"
            onChange={changeFile}
          />
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