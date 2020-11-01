import React, { useState } from "react";
import * as MyTypes from "MyTypes";
import { connect } from "react-redux";
import { FormType } from "../../reducers/authFormReducer";
import { showLoginForm, showSignUpForm } from "../../actions/AuthFormState";
import { login, loadUserI, logout } from "../../actions/Auth";

interface Props {
  authForm: FormType;
  showLoginForm: () => void;
  showSignUpForm: () => void;
  login: (formData: User) => void;
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
  showLoginForm,
  showSignUpForm,
  login,
  loadUserI,
  logout,
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

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(user);
    loadUserI();
  };

  return (
    <form onSubmit={onSubmit}>
      {authForm.formType === "signup" && (
        <input
          type="text"
          placeholder="Name"
          name="name"
          // autoComplete="off"
          onChange={handleOnChange}
          value={name}
        />
      )}
      <input
        type="email"
        placeholder="Email"
        name="email"
        // autoComplete="off"
        onChange={handleOnChange}
        value={email}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        // autoComplete="off"
        onChange={handleOnChange}
        value={password}
      />
      {authForm.formType === "signup" && (
        <input
          type="phone"
          placeholder="Phone"
          name="phone"
          // autoComplete="off"
          onChange={handleOnChange}
          value={phone}
        />
      )}
      <button type="submit">
        {authForm.formType === "login" ? "Login" : "Sign Up"}
      </button>
      <div onClick={() => logout()}>logout</div>
      New user?{" "}
      <div
        onClick={() =>
          authForm.formType === "login" ? showSignUpForm() : showLoginForm()
        }
      >
        Sign Up
      </div>
    </form>
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
});

export default connect(mapStateToProps, mapDispatchToProps())(Auth);
