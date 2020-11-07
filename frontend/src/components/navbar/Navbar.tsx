import React, { useState, useEffect, Fragment } from "react";
import {
  BrandName,
  CategoryDropDownList,
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
  SearchResItem,
  SearchResults,
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
  logout,
  mountDropDown,
  unmountDropDown,
  getProducts,
  setCategory,
  clearSearch,
  nav,
  auth,
}) => {
  const matches = useMediaQuery("(max-width: 1300px)");
  const [searchAnimation, setSearchAnimation] = useState({ opacity: 1 });
  const [searchQuery, setSearchQuery] = useState<Array<string>>([]);
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
    setSearchQuery([]);
    if (searchAnimation.opacity === 1) {
      setSearchAnimation((prev) => ({ ...prev, opacity: 0 }));
    } else {
      setSearchAnimation((prev) => ({ ...prev, opacity: 1 }));
    }
  };

  const logoutFromHere = () => {
    if (auth.isAuthenticated) {
      logout();
    }
  };

  const searchProducts = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const array: Array<string> = [
      "Jackets",
      "Mens jackets",
      "Hoodies",
      "Hoodies for men",
      "Winter Hoodies",
      "Cardigan",
      "Black Cardigan",
      "gloves",
      "socks",
      "glasses",
    ];
    const searchRegExp = new RegExp(value, "gi");

    if (value !== "") {
      const filtered = array.filter((q) => q.match(searchRegExp));
      setSearchQuery(filtered);
    } else {
      setSearchQuery([]);
    }
  };

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
                      onChange={searchProducts}
                      queryRes={searchQuery.length > 0 ? true : false}
                    ></SearchInputField>
                    <CloseInputField
                      onClick={openSearchBar}
                      queryRes={searchQuery.length > 0 ? true : false}
                    ></CloseInputField>
                    {searchQuery.length > 0 && (
                      <SearchResults>
                        {searchQuery.map((res) => (
                          <SearchResItem>{res}</SearchResItem>
                        ))}
                      </SearchResults>
                    )}
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
                  className="category"
                  animate={{ x: animation.x, opacity: animation.opacity }}
                  transition={{
                    duration: animation.duration,
                    delay: animation.delay * 0.1,
                  }}
                  navType={nav.setNavOpen}
                  onHoverStart={() => mountDropDown()}
                  onHoverEnd={() => unmountDropDown()}
                >
                  <Link to="/choose-category">Categories</Link>
                  {nav.isDropDownShown && !matches && (
                    <CategoryDropDownList
                      listener={nav.isDropDownShown}
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
                  <Link to={"/auth"} onClick={logoutFromHere}>
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
