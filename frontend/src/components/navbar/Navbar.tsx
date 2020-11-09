import React, { useState, useEffect, Fragment } from "react";
import {
  BrandName,
  CategoryDropDownList,
  Ham,
  HamMenu,
  ListItem,
  MidHam,
  NavbarChildContainer,
  NavbarParentContainer,
  NavLinks,
  SubItem,
} from "./navbar.styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { connect } from "react-redux";
import * as MyTypes from "MyTypes";
import { showDeskType, showMobType, toggleNav } from "../../actions/Navbar";
import { NavbarStateI } from "../../reducers/navReducer";
import { Link } from "react-router-dom";
import {
  toggleMUNav,
  mountDropDown,
  unmountDropDown,
} from "../../actions/Navbar";
import { UserAuthState } from "../../reducers/authReducer";
import { logout, resetSubmitState } from "../../actions/Auth";
import { clearSearch, getProducts, setCategory } from "../../actions/Products";
import SearchComponent1 from "./SearchComponent1";
import { searchProductsExporter } from "../../helpers/searchProducts";

interface Props {
  showDeskType: () => void;
  showMobType: () => void;
  toggleNav: (T: boolean) => void;
  toggleMUNav: (T: boolean) => void;
  logout: () => void;
  resetSubmitState: () => void;
  mountDropDown: () => void;
  unmountDropDown: () => void;
  getProducts: (categoryToBeFetched: string) => void;
  setCategory: (cate: string) => void;
  clearSearch: () => void;
  nav: NavbarStateI;
  auth: UserAuthState;
}

export interface NavlinksAnimation {
  x: 20 | -20;
  opacity: 0 | 1;
  duration: number;
  delay: number;
}

const Navbar: React.FC<Props> = ({
  showDeskType,
  showMobType,
  toggleNav,
  logout,
  mountDropDown,
  unmountDropDown,
  getProducts,
  setCategory,
  clearSearch,
  nav,
  auth,
}) => {
  /* Media query for navbar */
  const matches = useMediaQuery("(max-width: 1300px)");

  /** Component local states
   * search bar animation
   * searching query and returning array of matches
   * navbar animations
   */
  const [searchAnimation, setSearchAnimation] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<Array<string>>([]);
  const [animation, setAniamtion] = useState<NavlinksAnimation>({
    x: -20,
    opacity: 1,
    duration: 0.5,
    delay: 1,
  });

  /** Destructuring objects used regularly */
  const { x, opacity, duration, delay } = animation;
  const { isDropDownShown, navIsMounted, navbarType, setNavOpen } = nav;
  const { isAuthenticated } = auth;

  /** Navbar search animation
   * in mobile and in desktop view
   */
  const reverseAnimationAndUnmountNav = () => {
    x === -20
      ? setAniamtion((prev) => ({ ...prev, x: 20, opacity: 1 }))
      : setAniamtion((prev) => ({ ...prev, x: -20, opacity: 0 }));

    setNavOpen
      ? setTimeout(() => {
          toggleNav(!setNavOpen);
        }, 1000)
      : toggleNav(!setNavOpen);
  };

  /** close search bar and
   * reset local state of query results
   */
  const openSearchBar = () => {
    setSearchQuery([]);
    setSearchAnimation((prev) => !prev);
  };

  /** Toggle b/w mobile and desktop type navbars
   * depending on window size
   *
   *
   */
  useEffect(() => {
    matches ? showMobType() : showDeskType();
    setAniamtion((prev) => ({ ...prev, opacity: 1, x: 20 }));
    toggleNav(false);
  }, [matches]);

  return (
    <Fragment>
      {navIsMounted && (
        <NavbarParentContainer>
          <NavbarChildContainer>
            <BrandName>A R I Z O N A</BrandName>
            {(navbarType === "desk" || setNavOpen) && (
              <NavLinks navType={setNavOpen}>
                {!searchAnimation && (
                  <ListItem
                    onClick={openSearchBar}
                    animate={{
                      x: x,
                      opacity: opacity,
                    }}
                    transition={{
                      duration: duration,
                      delay: delay * 0,
                    }}
                    navType={setNavOpen}
                  >
                    Search
                  </ListItem>
                )}
                {searchAnimation && (
                  <SearchComponent1
                    animation={animation}
                    nav={{
                      isDropDownShown,
                      navIsMounted,
                      navbarType,
                      setNavOpen,
                    }}
                    openSearchBar={openSearchBar}
                    searchProducts={searchProductsExporter(setSearchQuery)}
                    searchQuery={searchQuery}
                  />
                )}
                <ListItem
                  animate={{
                    x: x,
                    opacity: opacity,
                  }}
                  transition={{
                    duration: duration,
                    delay: delay * 0,
                  }}
                  navType={setNavOpen}
                >
                  <Link to="/">Home</Link>
                </ListItem>
                <ListItem
                  className="category"
                  animate={{ x: x, opacity: opacity }}
                  transition={{
                    duration: duration,
                    delay: delay * 0.1,
                  }}
                  navType={setNavOpen}
                  onHoverStart={() => mountDropDown()}
                  onHoverEnd={() => unmountDropDown()}
                >
                  <Link to="/choose-category">Categories</Link>
                  {isDropDownShown && !matches && (
                    <CategoryDropDownList
                      listener={isDropDownShown}
                      animate={{ opacity: 1, width: 200 }}
                      transition={{ duration: 0.3 }}
                    >
                      <SubItem
                        layout
                        onClick={() => {
                          clearSearch();
                          getProducts("Jackets");
                          setCategory("Jackets");
                        }}
                        key="Jacket"
                      >
                        <Link to="/categories">Jackets</Link>
                      </SubItem>
                      <SubItem
                        layout
                        onClick={() => {
                          clearSearch();
                          getProducts("Hoodies");
                          setCategory("Hoodies");
                        }}
                        key="Hoodies"
                      >
                        <Link to="/categories">Hoodies</Link>
                      </SubItem>
                      <SubItem
                        layout
                        onClick={() => {
                          clearSearch();
                          getProducts("Cardigans");
                          setCategory("Cardigans");
                        }}
                        key="Cardigans"
                      >
                        <Link to="/categories">Cardigans</Link>
                      </SubItem>
                      <SubItem
                        layout
                        onClick={() => {
                          clearSearch();
                          getProducts("Apparels");
                          setCategory("Apparels");
                        }}
                        key="Apparels"
                      >
                        <Link to="/categories">Apparels</Link>
                      </SubItem>
                    </CategoryDropDownList>
                  )}
                </ListItem>
                <ListItem
                  animate={{ x: animation.x, opacity: animation.opacity }}
                  transition={{
                    duration: animation.duration,
                    delay: animation.delay * 0.2,
                  }}
                  navType={nav.setNavOpen}
                >
                  <Link to={"/auth"} onClick={logout}>
                    {auth.isAuthenticated ? "Logout" : "Login"}
                  </Link>
                </ListItem>
                <ListItem
                  animate={{ x: animation.x, opacity: animation.opacity }}
                  transition={{
                    duration: animation.duration,
                    delay: animation.delay * 0.3,
                  }}
                  navType={nav.setNavOpen}
                >
                  <Link to="/cart">Cart</Link>
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
  auth: store.auth,
});

export default connect(mapStateToProps, {
  showMobType,
  showDeskType,
  toggleMUNav,
  toggleNav,
  logout,
  resetSubmitState,
  mountDropDown,
  unmountDropDown,
  getProducts,
  setCategory,
  clearSearch,
})(Navbar);
