import styled from "styled-components";
import { motion } from "framer-motion";

export const FormContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
`;

export const FormContents = styled.div`
  width: 80%;
  max-width: 1300px;
  height: 100%;
`;

export const ArizonaName = styled.div`
  width: 100%;
  text-align: center;
  font-size: 30px;
  font-weight: 600;
`;

export const FormType = styled.div`
  width: 100%;
  text-align: center;
  font-size: 25px;
  margin: 20px 0;
`;

export const AuthForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const AuthInput = styled.input`
  width: 350px;
  height: 35px;
  border: none;
  border-radius: 35px;
  margin-bottom: 10px;
  padding: 8px 20px;
  background-color: #eee;

  &:focus {
    outline: none;
  }
`;

export const SubmitFormButton = styled.button`
  width: 350px;
  height: 35px;
  border: none;
  border-radius: 35px;
  margin-top: 10px;
  background-color: #222;
  color: #fff;

  &:focus {
    outline: none;
  }
`;

export const ChangeFormType = styled.div`
  width: 350px;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ShowOtherForm = styled.div`
  color: #0066ff;
  margin-left: 5px;
  cursor: pointer;
`;
