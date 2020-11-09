import React from "react";
import { NavbarStateI } from "../../reducers/navReducer";
import { NavlinksAnimation } from "./Navbar";
import {
  SearchComponent,
  SearchInputField,
  CloseInputField,
  SearchResults,
  SearchResItem,
} from "./navbar.styles";

interface Props {
  searchProducts: (e: React.ChangeEvent<HTMLInputElement>) => void;
  openSearchBar: () => void;
  nav: NavbarStateI;
  animation: NavlinksAnimation;
  searchQuery: Array<string>;
}

const SearchComponent1: React.FC<Props> = ({
  searchProducts,
  openSearchBar,
  nav: { setNavOpen },
  animation: { x, opacity, duration },
  searchQuery,
}) => {
  return (
    <SearchComponent
      navType={setNavOpen}
      animate={{ x: x, opacity: opacity }}
      transition={{ duration: duration }}
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
  );
};
export default SearchComponent1;
