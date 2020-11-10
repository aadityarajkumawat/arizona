import React, { useState, useEffect, Fragment } from "react";
import * as MyTypes from "MyTypes";
// Styled Components
import {
  BrandName,
  CategoryDropDownList,
  NavbarChildContainer,
  NavbarParentContainer,
  NavLinks,
} from "./navbar.styles";

// Navbar actions
import {
  toggleMUNav,
  mountDropDown,
  unmountDropDown,
} from "../../actions/Navbar";

// Related
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { NavbarStateI } from "../../reducers/navReducer";
import { UserAuthState } from "../../reducers/authReducer";
import { searchProductsExporter } from "../../helpers/searchProducts";
import { logout, resetSubmitState } from "../../actions/Auth";
import { showDeskType, showMobType, toggleNav } from "../../actions/Navbar";
import { clearSearch, getProducts, setCategory } from "../../actions/Products";

// Child Components
import ListItem1 from "./ListItem1";
import SubItem1 from "./SubItem1";
import HamMenu1 from "./HamMenu1";
import SearchComponent1 from "./SearchComponent1";

// Material UI Core
import useMediaQuery from "@material-ui/core/useMediaQuery";

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
  x: number;
  opacity: number;
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
   * slide in navlinks and make'em visible
   *
   * set navbar type to false
   */
  useEffect(() => {
    matches ? showMobType() : showDeskType();
    setAniamtion((prev) => ({ ...prev, opacity: 1, x: -20 }));
    toggleNav(false);
  }, [matches]);

  /** Breaking this down into 3 steps
   *
   * clear the previous search query
   * update the searched query
   * fetch new products depending on updated query
   */
  const clearSearchGetProductsSetCategory = (categoryName: string) => {
    clearSearch();
    setCategory(categoryName);
    getProducts(categoryName);
  };

  return (
    <Fragment>
      {navIsMounted && (
        <NavbarParentContainer>
          <NavbarChildContainer>
            <BrandName>A R I Z O N A</BrandName>
            {(navbarType === "desk" || setNavOpen) && (
              <NavLinks navType={setNavOpen}>
                {!searchAnimation ? (
                  /** navbar search bar search link */
                  <ListItem1
                    onClick={() => openSearchBar()}
                    x={x}
                    opacity={opacity}
                    mul={0}
                    setNavOpen={setNavOpen}
                    navLinkName={"Search"}
                  >
                    Search
                  </ListItem1>
                ) : (
                  /** Search bar appears when search link disappears */
                  <SearchComponent1
                    animation={animation}
                    nav={nav}
                    openSearchBar={openSearchBar}
                    searchProducts={searchProductsExporter(setSearchQuery)}
                    searchQuery={searchQuery}
                  />
                )}
                <ListItem1
                  x={x}
                  opacity={opacity}
                  mul={0}
                  setNavOpen={setNavOpen}
                >
                  <Link to="/">Home</Link>
                </ListItem1>
                {/** Category navbar link item */}
                <ListItem1
                  className="category"
                  x={x}
                  opacity={opacity}
                  mul={0.1}
                  setNavOpen={setNavOpen}
                  onHoverStart={() => mountDropDown()}
                  onHoverEnd={() => unmountDropDown()}
                >
                  <Link to="/choose-category">Categories</Link>
                  {/** The category drop down list */}
                  {isDropDownShown && !matches && (
                    <CategoryDropDownList
                      listener={isDropDownShown}
                      animate={{ opacity: 1, width: 200 }}
                      transition={{ duration: 0.3 }}
                    >
                      <SubItem1
                        categoryName="Jackets"
                        categoryHandler={clearSearchGetProductsSetCategory}
                      />
                      <SubItem1
                        categoryName="Hoodies"
                        categoryHandler={clearSearchGetProductsSetCategory}
                      />
                      <SubItem1
                        categoryName="Cardigans"
                        categoryHandler={clearSearchGetProductsSetCategory}
                      />
                      <SubItem1
                        categoryName="Apparels"
                        categoryHandler={clearSearchGetProductsSetCategory}
                      />
                    </CategoryDropDownList>
                  )}
                </ListItem1>
                <ListItem1
                  x={x}
                  opacity={opacity}
                  mul={0.2}
                  setNavOpen={setNavOpen}
                >
                  <Link to={"/auth"} onClick={logout}>
                    {isAuthenticated ? "Logout" : "Login"}
                  </Link>
                </ListItem1>
                <ListItem1
                  x={x}
                  opacity={opacity}
                  setNavOpen={setNavOpen}
                  mul={0.3}
                >
                  <Link to="/cart">Cart</Link>
                </ListItem1>
              </NavLinks>
            )}
            <HamMenu1 nav={nav} handleNav={reverseAnimationAndUnmountNav} />
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
