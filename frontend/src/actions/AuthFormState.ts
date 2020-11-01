import { Dispatch } from "redux";
import { action } from "typesafe-actions";
import { AuthFormState } from "./types";
import * as MyTypes from "MyTypes";

export const authFormStateAction = {
  showLoginForm: () => action(AuthFormState.SHOW_LOGIN_FORM),
  showSignUpForm: () => action(AuthFormState.SHOW_SIGNUP_FORM),
};

export const showLoginForm = () => (dispatch: Dispatch<MyTypes.RootAction>) => {
  dispatch({ type: AuthFormState.SHOW_LOGIN_FORM });
};

export const showSignUpForm = () => (
  dispatch: Dispatch<MyTypes.RootAction>
) => {
  dispatch({ type: AuthFormState.SHOW_SIGNUP_FORM });
};
