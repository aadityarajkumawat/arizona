import { Dispatch } from "redux";
import { action } from "typesafe-actions";
import { AuthState } from "./types";
import * as MyTypes from "MyTypes";
import { User } from "../components/auth/Auth";
import Axios from "axios";
import setAuthToken from "../helpers/setAuthToken";

export type Token = string;

export interface TokenObject {
  token: Token;
}

export interface LoadedUser {
  user_id: string;
  name: string;
  email: string;
  phone: string;
  cart_id: string;
}

export const authAction = {
  loginSuccess: (tokenObject: Token) =>
    action(AuthState.LOGIN_SUCCESS, tokenObject),

  loginFail: (err: any) => action(AuthState.LOGIN_FAIL, err),

  signUpSuccess: (tokenObject: Token) =>
    action(AuthState.SIGNUP_SUCCESS, tokenObject),

  signUpFail: (err: any) => action(AuthState.SIGNUP_FAIL, err),

  loadUser: (user: LoadedUser) => action(AuthState.LOAD_USER, user),

  loadUserFailed: (err: any) => action(AuthState.LOAD_USER_FAIL, err),

  setAlert: (msg: string) => action(AuthState.SET_ALERT, msg),

  logout: () => action(AuthState.LOGOUT),

  formSubmit: () => action(AuthState.FORM_SUBMIT),

  resetSubmitState: () => action(AuthState.RESET_FORM_STATE),

  clearError: () => action(AuthState.CLEAR_ALERT),
};

export const loadUserI = () => async (
  dispatch: Dispatch<MyTypes.RootAction>
) => {
  try {
    if (localStorage.getItem("token")) {
      setAuthToken(localStorage.getItem("token"));
      const res = await Axios.get<LoadedUser>("/api/auth");
      dispatch({ type: AuthState.LOAD_USER, payload: res.data });
    }
  } catch (err) {
    dispatch({
      type: AuthState.LOAD_USER_FAIL,
      payload: "Error while loading user",
    });

    setTimeout(() => {
      dispatch({ type: AuthState.CLEAR_ALERT });
    }, 3000);
  }
};

export const login = (formData: User) => async (
  dispatch: Dispatch<MyTypes.RootAction>
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await Axios.post<TokenObject>("/api/auth", formData, config);
    dispatch({ type: AuthState.LOGIN_SUCCESS, payload: res.data.token });
    dispatch({ type: AuthState.RESET_FORM_STATE });
    console.log(res);
  } catch (err) {
    dispatch({ type: AuthState.RESET_FORM_STATE });
    dispatch({
      type: AuthState.LOGIN_FAIL,
      payload: err.response.data.errors[0].msg,
    });

    setTimeout(() => {
      dispatch({ type: AuthState.CLEAR_ALERT });
    }, 3000);
  }
};

export const signUp = (formData: User) => async (
  dispatch: Dispatch<MyTypes.RootAction>
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await Axios.post<TokenObject>("/api/users", formData, config);
    dispatch({ type: AuthState.SIGNUP_SUCCESS, payload: res.data.token });
    dispatch({ type: AuthState.RESET_FORM_STATE });
  } catch (err) {
    dispatch({
      type: AuthState.SIGNUP_FAIL,
      payload: err.response.data.errors[0].msg,
    });

    dispatch({ type: AuthState.RESET_FORM_STATE });
    setTimeout(() => {
      dispatch({ type: AuthState.CLEAR_ALERT });
    }, 3000);
  }
};

export const logout = () => (dispatch: Dispatch<MyTypes.RootAction>) => {
  dispatch({ type: AuthState.LOGOUT });
};

export const resetSubmitState = () => (
  dispatch: Dispatch<MyTypes.RootAction>
) => {
  dispatch({ type: AuthState.RESET_FORM_STATE });
};

export const setAlert = (msg: string) => (
  dispatch: Dispatch<MyTypes.RootAction>
) => {
  dispatch({ type: AuthState.SET_ALERT, payload: msg });
  setTimeout(() => {
    dispatch({ type: AuthState.CLEAR_ALERT });
  }, 3000);
};

export const formSubmit = () => (dispatch: Dispatch<MyTypes.RootAction>) => {
  dispatch({ type: AuthState.FORM_SUBMIT });
};
