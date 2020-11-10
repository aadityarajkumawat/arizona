import React, { Fragment } from "react";
import { NavbarStateI } from "../../reducers/navReducer";
import { HamMenu, MidHam, Ham } from "./navbar.styles";

interface Props {
  nav: NavbarStateI;
  handleNav: () => void;
}

const HamMenu1: React.FC<Props> = ({ nav, handleNav }) => {
  return (
    <Fragment>
      {nav.navbarType === "mob" ? (
        <HamMenu onClick={() => handleNav()}>
          <Ham></Ham>
          <MidHam></MidHam>
          <Ham></Ham>
        </HamMenu>
      ) : (
        <Fragment></Fragment>
      )}
    </Fragment>
  );
};
export default HamMenu1;
