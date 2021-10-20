import React, { useState } from "react";
import SaveButton from "../../Button/SaveButton";
import IncreasedInput from "../IncreasedInput";

const EditEssentialsForm: React.FC = () => {
  const [inputList, setInputList] = useState<string[]>([""]);

  const submitFormHandler: React.FormEventHandler<HTMLFormElement> = (
    event,
  ) => {
    event.preventDefault();
    // handle here save Area
    console.log(inputList);
  };

  return (
    <form onSubmit={submitFormHandler}>
      <IncreasedInput
        inputList={inputList}
        setInputList={setInputList}
        placeholder="Add Essentials"
      />
      <SaveButton buttonDisabled={false} />
    </form>
  );
};

export default EditEssentialsForm;
