import React, { useEffect } from "react";
import {
  LeftImage,
  ProductCategory,
  ProductContentsContainer,
  ProductHeader,
  ProductImageMain,
  ProductItemMain,
  ProductList,
  ProductName,
  ProductPageContainer,
  ProductPrice,
  RightInfo,
} from "./products.styles";
import { connect } from "react-redux";
import * as MyTypes from "MyTypes";
import { ProductStateI } from "../reducers/productReducer";
import { getProducts } from "../actions/Products";

interface Props {
  product: ProductStateI;
  getProducts: (categoryToFetch: string) => void;
}

const Product: React.FC<Props> = ({ product, getProducts }) => {
  useEffect(() => {
    if (product.products.length === 0) {
      if (
        localStorage.getItem("category") !== product.categorySearched &&
        product.categorySearched !== ""
      ) {
        getProducts(product.categorySearched);
      } else {
        // @ts-ignore
        getProducts(localStorage.getItem("category"));
      }
    } else {
      if (product.products.length > 0) {
        localStorage.setItem("category", product.categorySearched);
      }
    }
  }, [product.products.length, product.categorySearched]);

  return (
    <ProductPageContainer>
      <ProductContentsContainer>
        <ProductHeader>
          Category: {product.products[0] ? product.products[0].category : ""}
        </ProductHeader>
        <ProductList>
          {product.products.map((product) => (
            <ProductItemMain>
              <LeftImage>
                <ProductImageMain src={product.product_img} />
              </LeftImage>
              <RightInfo>
                <ProductName>{product.product_name}</ProductName>
                <ProductPrice>Rs. {product.product_price}</ProductPrice>
                <ProductCategory>Category: {product.category}</ProductCategory>
              </RightInfo>
            </ProductItemMain>
          ))}
        </ProductList>
      </ProductContentsContainer>
    </ProductPageContainer>
  );
};

const mapStateToProps = (store: MyTypes.ReducerState) => ({
  product: store.product,
});

export default connect(mapStateToProps, { getProducts })(Product);
