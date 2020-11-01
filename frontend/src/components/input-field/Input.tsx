import React from "react";

interface Props {
  iType: string;
  changeListener: (e: React.ChangeEvent<HTMLInputElement>) => void;
  iValue: string;
}

const Input: React.FC<Props> = ({ iType, changeListener, iValue }) => {
  return (
    <input
      type={iType}
      placeholder={iType}
      name={iType}
      autoComplete="off"
      onChange={changeListener}
      value={iValue}
    />
  );
};
export default Input;
