import React from "react";
import { AlertContainer, AlertContents } from "./alert.styles";

interface Props {
  errorMsg: string;
}

const Alert: React.FC<Props> = ({ errorMsg }) => {
  return (
    <AlertContainer>
      <AlertContents animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        {errorMsg}
      </AlertContents>
    </AlertContainer>
  );
};

export default Alert;
