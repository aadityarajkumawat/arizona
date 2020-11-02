import React from "react";
import { AuthInput } from "../auth/auth.styles";

interface Props {
  iType: string;
  changeListener: (e: React.ChangeEvent<HTMLInputElement>) => void;
  iValue: string;
}

const Input: React.FC<Props> = ({ iType, changeListener, iValue }) => {
  return (
    <AuthInput
      type={iType}
      placeholder={iType}
      name={iType}
      autoComplete="off"
      onChange={changeListener}
      value={iValue}
      spellCheck="false"
    />
  );
};
export default Input;
