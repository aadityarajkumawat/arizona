import React from "react";
import { AuthInput } from "../auth/auth.styles";

interface Props {
  changeListener: (e: React.ChangeEvent<HTMLInputElement>) => void;
  iType: string;
  iValue: string;
}

const Input: React.FC<Props> = ({ iType, changeListener, iValue }) => {
  return (
    <AuthInput
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      type={iType}
      placeholder={
        iType.substr(0, 1).toUpperCase() + iType.substr(1, iType.length - 1)
      }
      name={iType}
      autoComplete="off"
      onChange={changeListener}
      value={iValue}
      spellCheck="false"
    />
  );
};
export default Input;
