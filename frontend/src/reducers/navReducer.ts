import * as MyTypes from "MyTypes";
import { NavbarState } from "../actions/types";

export interface NavbarStateI {
  navbarType: "desk" | "mob";
  setNavOpen: boolean;
  navIsMounted: boolean;
}

const init: NavbarStateI = {
  navbarType: "desk",
  setNavOpen: false,
  navIsMounted: true,
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
    case NavbarState.MU_NAV:
      return { ...state, navIsMounted: action.payload };
    default:
      return state;
  }
};
