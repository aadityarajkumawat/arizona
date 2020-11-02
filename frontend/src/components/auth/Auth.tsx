import React, { useState } from "react";
import * as MyTypes from "MyTypes";
import { connect } from "react-redux";
import { FormType } from "../../reducers/authFormReducer";
import { showLoginForm, showSignUpForm } from "../../actions/AuthFormState";
import { login, loadUserI, logout, signUp } from "../../actions/Auth";
import {
  isLoginDataValid,
  isUserDataValid,
} from "../../validators/formValidators";
import Input from "../input-field/Input";
import {
  AuthForm,
  ChangeFormType,
  ShowOtherForm,
  SubmitFormButton,
} from "./auth.styles";
import { UserAuthState } from "../../reducers/authReducer";

interface Props {
  authForm: FormType;
  auth: UserAuthState;
  showLoginForm: () => void;
  showSignUpForm: () => void;
  login: (formData: User) => void;
  signUp: (formData: User) => void;
  loadUserI: () => void;
  logout: () => void;
}

export interface User {
  email: string;
  name: string;
  password: string;
  phone: string;
}

const Auth: React.FC<Props> = ({
  authForm,
  auth,
  showLoginForm,
  showSignUpForm,
  login,
  loadUserI,
  logout,
  signUp,
}) => {
  const [user, setUser] = useState<User>({
    email: "",
    name: "",
    password: "",
    phone: "",
  });

  const { email, name, password, phone } = user;

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      authForm.formType === "login" &&
      (await isLoginDataValid(email, password))
    ) {
      login(user);
    } else {
      if (await isUserDataValid(name, email, password, phone)) {
        signUp(user);
      } else {
        console.log("Please enter correct info");
      }
    }
    loadUserI();
    setUser({ email: "", name: "", password: "", phone: "" });
  };
  

  return (
    <AuthForm onSubmit={onSubmit}>
      {authForm.formType === "signup" && (
        <Input iType="name" changeListener={handleOnChange} iValue={name} />
      )}
      <Input iType="email" changeListener={handleOnChange} iValue={email} />
      <Input
        iType="password"
        changeListener={handleOnChange}
        iValue={password}
      />
      {authForm.formType === "signup" && (
        <Input iType="phone" changeListener={handleOnChange} iValue={phone} />
      )}
      <SubmitFormButton type="submit" subState={auth.formSubmitted}>
        {authForm.formType === "login" ? "Login" : "Sign Up"}
      </SubmitFormButton>

      <ChangeFormType>
        New customer?
        <ShowOtherForm
          onClick={() =>
            authForm.formType === "login" ? showSignUpForm() : showLoginForm()
          }
        >
          Sign Up
        </ShowOtherForm>
      </ChangeFormType>
    </AuthForm>
  );
};

const mapStateToProps = (store: MyTypes.ReducerState) => ({
  authForm: store.authForm,
  auth: store.auth,
});

const mapDispatchToProps = () => ({
  showLoginForm,
  showSignUpForm,
  login,
  loadUserI,
  logout,
  signUp,
});

export default connect(mapStateToProps, mapDispatchToProps())(Auth);
