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
  loginFail: () => action(AuthState.LOGIN_FAIL),
  signUpSuccess: () => action(AuthState.SIGNUP_SUCCESS),
  signUpFail: () => action(AuthState.SIGNUP_FAIL),
  logout: () => action(AuthState.LOGOUT),
  loadUser: (user: LoadedUser) => action(AuthState.LOAD_USER, user),
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
    console.log(err);
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
  } catch (err) {
    dispatch({ type: AuthState.LOGIN_FAIL });
    console.log(err);
  }
};

export const logout = () => (dispatch: Dispatch<MyTypes.RootAction>) => {
  dispatch({ type: AuthState.LOGOUT });
};
