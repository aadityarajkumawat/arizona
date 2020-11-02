import * as MyTypes from "MyTypes";
import { NavbarState } from "../actions/types";

export interface NavbarStateI {
  navbarType: "desk" | "mob";
  setNavOpen: boolean;
}

const init: NavbarStateI = {
  navbarType: "desk",
  setNavOpen: false,
};

export const navbarReducer = (
  state: NavbarStateI = init,
  action: MyTypes.RootAction
): NavbarStateI => {
  switch (action.type) {
    case NavbarState.DESK_TYPE:
      return { ...state, navbarType: "desk", setNavOpen: false };
    case NavbarState.MOB_TYPE:
      return { ...state, navbarType: "mob", setNavOpen: false };
    case NavbarState.NAV_TYPE:
      return { ...state, setNavOpen: action.payload };
    default:
      return state;
  }
};
