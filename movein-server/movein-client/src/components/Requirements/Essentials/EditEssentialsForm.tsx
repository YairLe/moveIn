import React, { useContext, useEffect, useState } from "react";
import { RequirementsContext } from "../../../context/RequirementsContext";
import { IRequirements } from "../../../interfaces/interfaces";
import SaveButton from "../../Button/SaveButton";
import IncreasedInput from "../IncreasedInput";
import UpdateRequirements from "../UpdateRequirements";

const EditEssentialsForm: React.FC = () => {
  const { requirements, setRequirements } = useContext(RequirementsContext);
  const [inputList, setInputList] = useState<Array<string>>(
    requirements.essentials
  );
  const { handleFetching } = UpdateRequirements();

  const [oldValue, setOldValue] = useState<IRequirements>({ ...requirements });

  const submitFormHandler: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    event.preventDefault();
    const response = await handleFetching(oldValue);
    if (response.data) {
      localStorage.setItem("requirements", JSON.stringify(oldValue));
      setRequirements(oldValue);
      alert(response.data.message);
    }
  };

  const allowSubmit =
    Object.entries(oldValue).toString() !==
    Object.entries(requirements).toString();

  useEffect(() => {
    setOldValue((prevState: IRequirements) => {
      return {
        ...prevState,
        essentials:
          inputList.length !== 1
            ? inputList.filter((value) => value !== "")
            : inputList,
      };
    });
  }, [inputList]);

  return (
    <form onSubmit={submitFormHandler}>
      <IncreasedInput
        inputList={inputList}
        setInputList={setInputList}
        placeholder="Add Essentials"
      />
      <SaveButton buttonDisabled={!allowSubmit} />
    </form>
  );
};

export default EditEssentialsForm;
