import { action } from "typesafe-actions";
import * as MyTypes from "MyTypes";
import { Dispatch } from "redux";
import { NavbarState } from "./types";

export const navActions = {
  showDeskType: () => action(NavbarState.DESK_TYPE),
  showMobType: () => action(NavbarState.MOB_TYPE),
  toggleNav: (T: boolean) => action(NavbarState.NAV_TYPE, T),
  toggleMUNav: (T: boolean) => action(NavbarState.MU_NAV, T),
};

export const showDeskType = () => (dispatch: Dispatch<MyTypes.RootAction>) => {
  dispatch({ type: NavbarState.DESK_TYPE });
};

export const showMobType = () => (dispatch: Dispatch<MyTypes.RootAction>) => {
  dispatch({ type: NavbarState.MOB_TYPE });
};

export const toggleNav = (T: boolean) => (
  dispatch: Dispatch<MyTypes.RootAction>
) => {
  dispatch({ type: NavbarState.NAV_TYPE, payload: T });
};

export const toggleMUNav = (T: boolean) => (
  dispatch: Dispatch<MyTypes.RootAction>
) => {
  dispatch({ type: NavbarState.MU_NAV, payload: T });
};
