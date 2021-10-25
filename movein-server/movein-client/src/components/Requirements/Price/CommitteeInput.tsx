import React from "react";
import Input from "../../Input/Input";
import styles from "./EditPrice.module.css";

interface IProps {
  notifyInvalidCommittee: boolean;
  committee: string;
  setCommittee: React.ChangeEventHandler<HTMLInputElement>;
  blurCommittee: React.FocusEventHandler<HTMLInputElement>;
}

const CommitteeInput: React.FC<IProps> = (props: IProps) => {
  const { notifyInvalidCommittee, committee, setCommittee, blurCommittee } =
    props;

  const committeeInputProp = {
    type: "number",
    className: `${styles.houseStyle} ${
      notifyInvalidCommittee ? styles.inputInvalid : styles.input
    }`,
    id: "committee",
    name: "committee",
    value: committee,
    onChange: setCommittee,
    onBlur: blurCommittee,
    min: 0,
    max: 6000,
  };

  return (
    <React.Fragment>
      <p className={styles.houseLabel}>House Committee</p>
      <div className={styles.houseDiv}>
        <Input
          inputProp={committeeInputProp}
          inputInValid={false}
          inputInValidText={""}
        />
        <p className={styles.houseNis}>NIS max</p>
      </div>
    </React.Fragment>
  );
};

export default CommitteeInput;
