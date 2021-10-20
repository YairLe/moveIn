import React from "react";
import useInput from "../../../hooks/use-input";
import SaveButton from "../../Button/SaveButton";
import CommitteeInput from "./CommitteeInput";
import RentInput from "./RentInput";
import TaxInput from "./TaxInput";

interface IProps {}

const EditPriceForm: React.FC<IProps> = (props: IProps) => {
  const numberValidator = (value: string) =>
    /^\d+$/.test(value) && Number(value) > 0;

  const {
    value: minRent,
    isValid: isMinRentValid,
    notifyInvalidValue: notifyInvalidMinRent,
    inputSettingsChangeHandler: setMinRent,
    inputBlur: blurMinRent,
  } = useInput(numberValidator);

  const {
    value: maxRent,
    isValid: isMaxRentValid,
    notifyInvalidValue: notifyInvalidMaxRent,
    inputSettingsChangeHandler: setMaxRent,
    inputBlur: blurMaxRent,
  } = useInput(numberValidator);

  const {
    value: tax,
    isValid: isTaxValid,
    notifyInvalidValue: notifyInvalidTax,
    inputSettingsChangeHandler: setTax,
    inputBlur: blurTax,
  } = useInput(numberValidator);

  const {
    value: committee,
    isValid: isCommitteeValid,
    notifyInvalidValue: notifyInvalidCommittee,
    inputSettingsChangeHandler: setCommittee,
    inputBlur: blurCommittee,
  } = useInput(numberValidator);

  const allowSubmit =
    Number(minRent) < Number(maxRent) &&
    isMinRentValid &&
    isMaxRentValid &&
    isTaxValid &&
    isCommitteeValid;

  const submitFormHandler: React.FormEventHandler<HTMLFormElement> = (
    event,
  ) => {
    event.preventDefault();
    //handle save to db
    console.log(minRent, maxRent, tax, committee);
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
