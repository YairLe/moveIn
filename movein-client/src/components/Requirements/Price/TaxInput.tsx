import React from "react";
import Input from "../../Input/Input";
import styles from "./EditPrice.module.css";

interface IProps {
  notifyInvalidTax: boolean;
  tax: string;
  setTax: React.ChangeEventHandler<HTMLInputElement>;
  blurTax: React.FocusEventHandler<HTMLInputElement>;
}

const TaxInput: React.FC<IProps> = (props: IProps) => {
  const { notifyInvalidTax, tax, setTax, blurTax } = props;

  const taxInputProp = {
    type: "number",
    className: `${styles.taxInputProperty} ${
      notifyInvalidTax ? styles.inputInvalid : styles.input
    }`,
    id: "Tax",
    name: "Tax",
    value: tax,
    onChange: setTax,
    onBlur: blurTax,
    min: 0,
  };

  return (
    <React.Fragment>
      <div className={styles.houseDiv}>
        <Input
          label={"Property Tax"}
          inputProp={taxInputProp}
          labelStyle={styles.taxLabel}
          inputInValid={false}
          inputInValidText={""}
        />
      </div>
      <p className={styles.taxNis}>NIS max (2 months)</p>
    </React.Fragment>
  );
};

export default TaxInput;
