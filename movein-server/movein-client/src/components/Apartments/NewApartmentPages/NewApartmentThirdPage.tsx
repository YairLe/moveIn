import React, { useContext, useEffect, useState } from "react";
import { NewApartmentContext } from "../../../context/NewApartmentContext";
import Input from "../../Input/Input";
import styles from "../NewApartment.module.css";
import Slider from "./Slider";

const NewApartmentThirdPage: React.FC = () => {
  const { newApartment, setNewApartment } = useContext(NewApartmentContext);

  const [imgValue, setImgValue] = useState<any>(
    newApartment.photos !== "empty" ? newApartment.photos : null,
  );

  const changeFile: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const element = { ...newApartment };
    element.photos = event.target.value;
    setImgValue(event.target.files ? event.target.files : {});
  };

  const inputProp = {
    type: "file",
    name: "pic",
    id: "fileUpload",
    multiple: true,
    onChange: changeFile,
    style: { color: "transparent" },
  };

  useEffect(() => {
    const element = { ...newApartment };
    element.photos = imgValue && imgValue.length > 0 ? imgValue : "empty";
    setNewApartment(element);
  }, [imgValue]);

  return (
    <React.Fragment>
      <div className={styles.inputDiv}>
        <Input
          inputInValid={false}
          inputInValidText={""}
          inputProp={inputProp}
        />
      </div>
      {imgValue && imgValue.length > 0 && <Slider imgValue={imgValue} />}
    </React.Fragment>
  );
};

export default NewApartmentThirdPage;
