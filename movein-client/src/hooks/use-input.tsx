import React, { useState } from "react";

interface IEnteredValue {
  enteredValue: string;
  enteredValueTouched: boolean;
}

const useInput = (validateInput: Function) => {
  const [inputSettings, setInputSettings] = useState<IEnteredValue>({
    enteredValue: "",
    enteredValueTouched: false,
  });

  const isEnteredValueValid = validateInput(inputSettings.enteredValue);

  const notifyInvalidValue =
    !isEnteredValueValid && inputSettings.enteredValueTouched;

  const inputSettingsChangeHandler: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      setInputSettings((prevState) => {
        return { ...prevState, enteredValue: event.target.value };
      });
    };

  const inputBlur: React.FocusEventHandler<HTMLInputElement> = () => {
    setInputSettings((prevState) => {
      return { ...prevState, enteredValueTouched: true };
    });
  };

  const resetInputSettings = () => {
    setInputSettings({
      enteredValue: "",
      enteredValueTouched: false,
    });
  };

  return {
    value: inputSettings.enteredValue,
    isValid: isEnteredValueValid,
    notifyInvalidValue,
    inputSettingsChangeHandler,
    inputBlur,
    resetInputSettings,
  };
};

export default useInput;
