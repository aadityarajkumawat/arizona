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
            <CateImage src="https://firebasestorage.googleapis.com/v0/b/estore-a6fcb.appspot.com/o/-1117Wx1400H-461074808-maroon-MODEL.jpg?alt=media&token=064db98b-44d8-4b04-ac6b-2b0293250d55" />
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
            <CateImage src="https://firebasestorage.googleapis.com/v0/b/estore-a6fcb.appspot.com/o/41Md3gVYN%2BL._UX385_.jpg?alt=media&token=b76cc5fd-aa69-4cec-b84e-992b183d9949" />
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
            <CateImage src="https://firebasestorage.googleapis.com/v0/b/estore-a6fcb.appspot.com/o/mxpmenclo700527-1595093234.jpeg?alt=media&token=efe4671c-c3d5-4806-9e23-1317723aa1e4" />
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
            <CateImage src="https://firebasestorage.googleapis.com/v0/b/estore-a6fcb.appspot.com/o/61XVoH4XOnL._UL1100_.jpg?alt=media&token=1daa545f-555c-48e8-a544-dd718b10f36b" />
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
