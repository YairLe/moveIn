import React, { useContext, useEffect, useState } from "react";
import { RequirementsContext } from "../../../context/RequirementsContext";
import useInput from "../../../hooks/use-input";
import { IRequirements } from "../../../interfaces/interfaces";
import SaveButton from "../../Button/SaveButton";
import UpdateRequirements from "../UpdateRequirements";
import CommitteeInput from "./CommitteeInput";
import RentInput from "./RentInput";
import TaxInput from "./TaxInput";

const EditPriceForm: React.FC = () => {
  const { requirements, setRequirements } = useContext(RequirementsContext);
  const [oldValue, setOldValue] = useState<IRequirements>({ ...requirements });

  const { handleFetching } = UpdateRequirements();

  const numberValidator = (value: string) => /^\d+$/.test(value) && +value > 0;
  const {
    value: minRent,
    isValid: isMinRentValid,
    notifyInvalidValue: notifyInvalidMinRent,
    inputSettingsChangeHandler: setMinRent,
    inputBlur: blurMinRent,
  } = useInput(numberValidator, String(requirements.minPrice));

  const {
    value: maxRent,
    isValid: isMaxRentValid,
    notifyInvalidValue: notifyInvalidMaxRent,
    inputSettingsChangeHandler: setMaxRent,
    inputBlur: blurMaxRent,
  } = useInput(numberValidator, String(requirements.maxPrice));

  const {
    value: tax,
    isValid: isTaxValid,
    notifyInvalidValue: notifyInvalidTax,
    inputSettingsChangeHandler: setTax,
    inputBlur: blurTax,
  } = useInput(numberValidator, String(requirements.tax));

  const {
    value: committee,
    isValid: isCommitteeValid,
    notifyInvalidValue: notifyInvalidCommittee,
    inputSettingsChangeHandler: setCommittee,
    inputBlur: blurCommittee,
  } = useInput(numberValidator, String(requirements.committee));

  const allowSubmit =
    +minRent < +maxRent &&
    isMinRentValid &&
    isMaxRentValid &&
    isTaxValid &&
    isCommitteeValid &&
    Object.entries(oldValue).toString() !==
      Object.entries(requirements).toString();

  useEffect(() => {
    setOldValue((prevState: IRequirements) => {
      return {
        ...prevState,
        minPrice: +minRent,
        maxPrice: +maxRent,
        tax: +tax,
        committee: +committee,
      };
    });
  }, [minRent, maxRent, tax, committee]);

  const submitFormHandler: React.FormEventHandler<HTMLFormElement> = async (
    event,
  ) => {
    event.preventDefault();
    const response = await handleFetching(oldValue);
    if (response.data) {
      localStorage.setItem("requirements", JSON.stringify(oldValue));
      setRequirements(oldValue);
      alert(response.data.message);
    }
  };

  return (
    <form onSubmit={submitFormHandler}>
      <RentInput
        notifyInvalidMinRent={notifyInvalidMinRent}
        minRent={minRent}
        setMinRent={setMinRent}
        blurMinRent={blurMinRent}
        notifyInvalidMaxRent={notifyInvalidMaxRent}
        maxRent={maxRent}
        setMaxRent={setMaxRent}
        blurMaxRent={blurMaxRent}
      />
      <TaxInput
        notifyInvalidTax={notifyInvalidTax}
        tax={tax}
        setTax={setTax}
        blurTax={blurTax}
      />

      <CommitteeInput
        notifyInvalidCommittee={notifyInvalidCommittee}
        committee={committee}
        setCommittee={setCommittee}
        blurCommittee={blurCommittee}
      />
      <SaveButton buttonDisabled={!allowSubmit} />
    </form>
  );
};

export default EditPriceForm;
