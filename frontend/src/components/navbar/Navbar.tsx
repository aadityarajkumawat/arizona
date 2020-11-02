import React, { useState, useEffect } from "react";
import {
  BrandName,
  Ham,
  HamMenu,
  ListItem,
  MidHam,
  NavbarChildContainer,
  NavbarParentContainer,
  NavLinks,
} from "./navbar.styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { connect } from "react-redux";
import * as MyTypes from "MyTypes";
import { showDeskType, showMobType, toggleNav } from "../../actions/Navbar";
import { NavbarStateI } from "../../reducers/navReducer";

interface Props {
  showDeskType: () => void;
  showMobType: () => void;
  toggleNav: (T: boolean) => void;
  nav: NavbarStateI;
}

interface NavlinksAnimation {
  x: number;
  opacity: number;
  duration: number;
  delay: number;
}

const Navbar: React.FC<Props> = ({
  showDeskType,
  showMobType,
  toggleNav,
  nav,
}) => {
  const matches = useMediaQuery("(max-width: 1300px)");
  const [animation, setAniamtion] = useState<NavlinksAnimation>({
    x: -20,
    opacity: 1,
    duration: 0.5,
    delay: 1,
  });

  const reverseAnimationAndUnmountNav = () => {
    if (animation.x === -20) {
      setAniamtion({
        x: 20,
        opacity: 1,
        duration: 0.5,
        delay: 1,
      });
    } else {
      setAniamtion({
        x: -20,
        opacity: 0,
        duration: 0.5,
        delay: 1,
      });
    }

    if (nav.setNavOpen) {
      setTimeout(() => {
        toggleNav(!nav.setNavOpen);
      }, 1000);
    } else {
      toggleNav(!nav.setNavOpen);
    }
  };

  //? if window size < 1300 then matches is **true**

  useEffect(() => {
    if (matches) {
      showMobType();
    } else {
      showDeskType();
      setAniamtion((prev) => ({ ...prev, opacity: 1 }));
    }
    toggleNav(false);
  }, [matches]);

  return (
    <NavbarParentContainer>
      <NavbarChildContainer>
        <BrandName>A R I Z O N A</BrandName>
        {(nav.navbarType === "desk" || nav.setNavOpen) && (
          <NavLinks navType={nav.setNavOpen}>
            <ListItem
              animate={{ x: animation.x, opacity: animation.opacity }}
              transition={{
                duration: animation.duration,
                delay: animation.delay * 0,
              }}
              navType={nav.setNavOpen}
            >
              Search
            </ListItem>
            <ListItem
              animate={{ x: animation.x, opacity: animation.opacity }}
              transition={{
                duration: animation.duration,
                delay: animation.delay * 0.1,
              }}
              navType={nav.setNavOpen}
            >
              Categories
            </ListItem>
            <ListItem
              animate={{ x: animation.x, opacity: animation.opacity }}
              transition={{
                duration: animation.duration,
                delay: animation.delay * 0.2,
              }}
              navType={nav.setNavOpen}
            >
              Login
            </ListItem>
            <ListItem
              animate={{ x: animation.x, opacity: animation.opacity }}
              transition={{
                duration: animation.duration,
                delay: animation.delay * 0.3,
              }}
              navType={nav.setNavOpen}
            >
              Cart
            </ListItem>
          </NavLinks>
        )}
        {nav.navbarType === "mob" && (
          <HamMenu onClick={() => reverseAnimationAndUnmountNav()}>
            <Ham></Ham>
            <MidHam></MidHam>
            <Ham></Ham>
          </HamMenu>
        )}
      </NavbarChildContainer>
    </NavbarParentContainer>
  );
};
const mapStateToProps = (store: MyTypes.ReducerState) => ({
  nav: store.nav,
});

export default connect(mapStateToProps, {
  showMobType,
  showDeskType,
  toggleNav,
})(Navbar);
