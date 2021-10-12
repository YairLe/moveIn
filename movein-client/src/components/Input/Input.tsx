import React from "react";

interface IProps {
  label?: string;
  inputProp?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  labelStyle?: string;
  inputInValid: boolean;
  inputInValidText: string;
}

const Input: React.FC<IProps> = (props: IProps) => {
  const { label, inputProp, labelStyle, inputInValid, inputInValidText } =
    props;

  return (
    <React.Fragment>
      {label && (
        <label className={labelStyle} htmlFor={inputProp?.name}>
          {label}
        </label>
      )}
      <input
        placeholder={inputInValid ? inputInValidText : ""}
        {...inputProp}
      />
    </React.Fragment>
  );
};

export default Input;
