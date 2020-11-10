import React, { useState } from "react";
import * as MyTypes from "MyTypes";
import { connect } from "react-redux";
import { FormTypeReducer } from "../../reducers/authFormReducer";
import { showLoginForm, showSignUpForm } from "../../actions/AuthFormState";
import {
  formSubmit,
  login,
  loadUserI,
  logout,
  signUp,
  setAlert,
  resetSubmitState,
} from "../../actions/Auth";
import {
  isLoginDataValid,
  isUserDataValid,
} from "../../validators/formValidators";
import {
  AuthForm,
  ChangeFormType,
  ShowOtherForm,
  SubmitFormButton,
} from "./auth.styles";
import Input from "../input-field/Input";
import { UserAuthState } from "../../reducers/authReducer";

interface Props {
  authForm: FormTypeReducer;
  auth: UserAuthState;
  showLoginForm: () => void;
  showSignUpForm: () => void;
  login: (formData: User) => void;
  signUp: (formData: User) => void;
  loadUserI: () => void;
  logout: () => void;
  setAlert: (msg: string) => void;
  formSubmit: () => void;
  resetSubmitState: () => void;
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
  setAlert,
  formSubmit,
  resetSubmitState,
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
    formSubmit();
    /** If form type is login
     *
     * validate login credentials
     * if valid then login user
     * else show alert based on entered credentials
     *
     * If form type is signup
     *
     * validate signup credentials
     * if valid then signup user
     * else show an alert
     */
    if (authForm.formType === "login") {
      if (await isLoginDataValid(email, password)) {
        login(user);
      } else {
        // LOGIN CRED ALERT
        setAlert("Invalid credentials");
        resetSubmitState();
      }
    } else {
      if (await isUserDataValid(name, email, password, phone)) {
        signUp(user);
      } else {
        setAlert("Invalid credentials");
        resetSubmitState();
      }
    }
    /** If authenticated
     * load user by JWT and
     * reset the form for next time
     */
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
        {authForm.formType === "login"
          ? "New customer?"
          : "Already a customer?"}
        <ShowOtherForm
          onClick={() =>
            authForm.formType === "login" ? showSignUpForm() : showLoginForm()
          }
        >
          {authForm.formType === "login" ? "Sign Up" : "Login"}
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
  setAlert,
  formSubmit,
  resetSubmitState,
});

export default connect(mapStateToProps, mapDispatchToProps())(Auth);
