import React, { useEffect } from "react";
import {
  AddToCartButton,
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
import { AddProductData, addProductToCart } from "../actions/Cart";
import { UserAuthState } from "../reducers/authReducer";

interface Props {
  product: ProductStateI;
  auth: UserAuthState;
  getProducts: (categoryToFetch: string) => void;
  addProductToCart: (prodData: AddProductData) => void;
}

const Product: React.FC<Props> = ({
  product,
  auth,
  getProducts,
  addProductToCart,
}) => {
  useEffect(() => {
    if (product.products.length === 0) {
      if (
        localStorage.getItem("category") !== product.categorySearched &&
        product.categorySearched !== ""
      ) {
        getProducts(product.categorySearched);
        localStorage.setItem("category", product.categorySearched);
      } else {
        // @ts-ignore
        getProducts(localStorage.getItem("category"));
      }
    }
  }, [product.products.length, product.categorySearched]);

  const addThisProductToCart = (thisProductId: string) => {
    addProductToCart({ cart_id: auth.user.cart_id, product_id: thisProductId });
  };

  return (
    <ProductPageContainer>
      <ProductContentsContainer>
        <ProductHeader>
          Category:
          {product.products.length > 0 ? product.products[0].category : ""}
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
                <AddToCartButton
                  onClick={() => addThisProductToCart(product.product_id)}
                >
                  Add to Cart
                </AddToCartButton>
                <AddToCartButton>Buy now</AddToCartButton>
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
  auth: store.auth,
});

export default connect(mapStateToProps, { getProducts, addProductToCart })(
  Product
);
