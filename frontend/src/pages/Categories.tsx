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
import { clearSearch, getProducts, setCategory } from "../actions/Products";

interface Props {
  getProducts: (fetchByCategory: string) => void;
  clearSearch: () => void;
  setCategory: (categoryName: string) => void;
}

const Categories: React.FC<Props> = ({
  getProducts,
  clearSearch,
  setCategory,
}) => {
  return (
    <CategoriesContainer>
      <CategoriesContents>
        <Link to="/categories">
          <CategoryItem
            onClick={() => {
              clearSearch();
              getProducts("Jackets");
              setCategory("Jackets");
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
              setCategory("Hoodies");
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
              getProducts("Cardigans");
              setCategory("Cardigans");
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
              setCategory("Apparels");
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
export default connect(null, { getProducts, clearSearch, setCategory })(
  Categories
);
