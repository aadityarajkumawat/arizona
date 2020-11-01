import * as MyTypes from "MyTypes";
import { AuthFormState } from "../actions/types";

export interface FormType {
  formType: string;
}

const init: FormType = {
  formType: "login",
};

export const authFormReducer = (
  state: FormType = init,
  action: MyTypes.RootAction
): FormType => {
  switch (action.type) {
    case AuthFormState.SHOW_LOGIN_FORM:
      return { ...state, formType: "login" };
    case AuthFormState.SHOW_SIGNUP_FORM:
      return { ...state, formType: "signup" };
    default:
      return state;
  }
};
