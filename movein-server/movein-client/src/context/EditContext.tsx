import React, { useState } from "react";

interface IProps {
  children: React.ReactNode;
}

const EditContext = React.createContext({
  isEdit: false,
  setIsEdit: () => {},
});

const EditProvider: React.FC<IProps> = (props: IProps) => {
  const { children } = props;
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const changeEditState = () => {
    setIsEdit(!isEdit);
  };

  const values = {
    isEdit: isEdit,
    setIsEdit: changeEditState,
  };
  return <EditContext.Provider value={values}>{children}</EditContext.Provider>;
};

export { EditProvider, EditContext };
