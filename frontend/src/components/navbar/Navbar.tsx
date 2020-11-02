import React, { useState, useEffect, Fragment } from "react";
import {
  BrandName,
  CloseInputField,
  Ham,
  HamMenu,
  ListItem,
  MidHam,
  NavbarChildContainer,
  NavbarParentContainer,
  NavLinks,
  SearchComponent,
  SearchInputField,
} from "./navbar.styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { connect } from "react-redux";
import * as MyTypes from "MyTypes";
import { showDeskType, showMobType, toggleNav } from "../../actions/Navbar";
import { NavbarStateI } from "../../reducers/navReducer";
import { Link } from "react-router-dom";
import { toggleMUNav } from "../../actions/Navbar";

interface Props {
  showDeskType: () => void;
  showMobType: () => void;
  toggleNav: (T: boolean) => void;
  toggleMUNav: (T: boolean) => void;
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
  toggleMUNav,
  nav,
}) => {
  const matches = useMediaQuery("(max-width: 1300px)");
  const [searchAnimation, setSearchAnimation] = useState({ opacity: 1 });
  const [animation, setAniamtion] = useState<NavlinksAnimation>({
    x: -20,
    opacity: 1,
    duration: 0.5,
    delay: 1,
  });

  const reverseAnimationAndUnmountNav = () => {
    if (animation.x === -20) {
      setAniamtion((prev) => ({
        ...prev,
        x: 20,
        opacity: 1,
      }));
    } else {
      setAniamtion((prev) => ({
        ...prev,
        x: -20,
        opacity: 0,
      }));
    }

    if (nav.setNavOpen) {
      setTimeout(() => {
        toggleNav(!nav.setNavOpen);
      }, 1000);
    } else {
      toggleNav(!nav.setNavOpen);
    }
  };

  const openSearchBar = () => {
    if (searchAnimation.opacity === 1) {
      setSearchAnimation((prev) => ({ ...prev, opacity: 0 }));
    } else {
      setSearchAnimation((prev) => ({ ...prev, opacity: 1 }));
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
    <Fragment>
      {nav.navIsMounted && (
        <NavbarParentContainer>
          <NavbarChildContainer>
            <BrandName>A R I Z O N A</BrandName>
            {(nav.navbarType === "desk" || nav.setNavOpen) && (
              <NavLinks navType={nav.setNavOpen}>
                {searchAnimation.opacity === 1 && (
                  <ListItem
                    onClick={openSearchBar}
                    animate={{
                      x: animation.x,
                      opacity: animation.opacity,
                    }}
                    transition={{
                      duration: animation.duration,
                      delay: animation.delay * 0,
                    }}
                    navType={nav.setNavOpen}
                  >
                    Search
                  </ListItem>
                )}
                {searchAnimation.opacity === 0 && (
                  <SearchComponent
                    navType={nav.setNavOpen}
                    animate={{ x: animation.x, opacity: animation.opacity }}
                    transition={{ duration: animation.duration }}
                  >
                    <SearchInputField
                      placeholder="Search"
                      animate={{ width: 170 }}
                      transition={{ duration: 0.3 }}
                      spellCheck="false"
                    ></SearchInputField>
                    <CloseInputField onClick={openSearchBar}></CloseInputField>
                  </SearchComponent>
                )}

                <ListItem
                  animate={{
                    x: animation.x,
                    opacity: animation.opacity,
                  }}
                  transition={{
                    duration: animation.duration,
                    delay: animation.delay * 0,
                  }}
                  navType={nav.setNavOpen}
                >
                  <Link to="/">Home</Link>
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
                  <Link to="/auth">Login</Link>
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
      )}
    </Fragment>
  );
};
const mapStateToProps = (store: MyTypes.ReducerState) => ({
  nav: store.nav,
});

export default connect(mapStateToProps, {
  showMobType,
  showDeskType,
  toggleMUNav,
  toggleNav,
})(Navbar);
