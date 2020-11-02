import * as MyTypes from "MyTypes";
import { Token } from "../actions/Auth";
import { LoadedUser } from "../actions/Auth";
import { AuthState } from "../actions/types";

export interface UserAuthState {
  token: Token | null;
  isAuthenticated: boolean;
  user: LoadedUser;
  loading: boolean;
  errors: any;
  formSubmitted: boolean;
}

const init: UserAuthState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  user: { user_id: "", name: "", cart_id: "", email: "", phone: "" },
  loading: true,
  errors: null,
  formSubmitted: false,
};

export const authReducer = (
  state: UserAuthState = init,
  action: MyTypes.RootAction
): UserAuthState => {
  switch (action.type) {
    case AuthState.LOGIN_SUCCESS:
    case AuthState.SIGNUP_SUCCESS:
      localStorage.setItem("token", action.payload);
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true,
        loading: false,
        errors: null,
      };
    case AuthState.LOAD_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        loading: false,
        errors: null,
      };
    case AuthState.LOGOUT:
    case AuthState.LOGIN_FAIL:
    case AuthState.SIGNUP_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: { user_id: "", name: "", cart_id: "", email: "", phone: "" },
        loading: false,
        errors: null,
      };
    case AuthState.FORM_SUBMIT:
      return {
        ...state,
        formSubmitted: true,
      };
    case AuthState.RESET_FORM_STATE:
      return {
        ...state,
        formSubmitted: false,
      };
    default:
      return state;
  }
};
