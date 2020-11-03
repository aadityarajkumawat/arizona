import * as MyTypes from "MyTypes";
import { AuthFormState } from "../actions/types";

export interface FormTypeReducer {
  formType: string;
}

const init: FormTypeReducer = {
  formType: "login",
};

export const authFormReducer = (
  state: FormTypeReducer = init,
  action: MyTypes.RootAction
): FormTypeReducer => {
  switch (action.type) {
    case AuthFormState.SHOW_LOGIN_FORM:
      return { ...state, formType: "login" };
    case AuthFormState.SHOW_SIGNUP_FORM:
      return { ...state, formType: "signup" };
    default:
      return state;
  }
};
