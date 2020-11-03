import React from "react";
import { Link } from "react-router-dom";
import {
  CateBottomName,
  CategoriesContainer,
  CategoriesContents,
  CategoryItem,
  CateImage,
} from "./categories.styles";
import { connect } from "react-redux";
import { clearSearch, getProducts } from "../actions/Products";

interface Props {
  getProducts: (fetchByCategory: string) => void;
  clearSearch: () => void;
}

const Categories: React.FC<Props> = ({ getProducts, clearSearch }) => {
  return (
    <CategoriesContainer>
      <CategoriesContents>
        <Link to="/categories">
          <CategoryItem
            onClick={() => {
              clearSearch();
              getProducts("Jackets");
            }}
          >
            <CateImage />
            <CateBottomName>Jackets</CateBottomName>
          </CategoryItem>
        </Link>

        <Link to="/categories">
          <CategoryItem
            onClick={() => {
              clearSearch();
              getProducts("Hoodies");
            }}
          >
            <CateImage />
            <CateBottomName>Hoodies</CateBottomName>
          </CategoryItem>
        </Link>

        <Link to="/categories">
          <CategoryItem
            onClick={() => {
              clearSearch();
              getProducts("Cardigan");
            }}
          >
            <CateImage />
            <CateBottomName>Cardigan</CateBottomName>
          </CategoryItem>
        </Link>

        <Link to="/categories">
          <CategoryItem
            onClick={() => {
              clearSearch();
              getProducts("Apparels");
            }}
          >
            <CateImage />
            <CateBottomName>Apparels</CateBottomName>
          </CategoryItem>
        </Link>
      </CategoriesContents>
    </CategoriesContainer>
  );
};
export default connect(null, { getProducts, clearSearch })(Categories);
