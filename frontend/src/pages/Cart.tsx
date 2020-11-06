import React, { useEffect } from "react";
import {
  ActualQuantity,
  CartBill,
  CartCheckBox,
  CartContainer,
  CartContents,
  CartItem,
  CartItems,
  CartItemsAndBillWrapper,
  CartPageName,
  CartProductImage,
  CartProductInfo,
  CartProductName,
  CartProductPrice,
  CheckBox,
  DescButton,
  IncButton,
  MainCartItem,
  QuantitySelector,
} from "./cart.styles";
import {
  getCart,
  ResBodyGetProducts,
  addProductToCart,
  AddProductData,
  setAddingTrue,
  ProductData,
} from "../actions/Cart";
import { connect } from "react-redux";
import * as MyTypes from "MyTypes";
import { CartReducerState } from "../reducers/CartReducer";
import { loadUserI } from "../actions/Auth";
import { UserAuthState } from "../reducers/authReducer";

interface Props {
  cart: CartReducerState;
  auth: UserAuthState;
  getCart: () => void;
  loadUserI: () => void;
  addProductToCart: (prodData: ProductData) => void;
  setAddingTrue: () => void;
}

const Cart: React.FC<Props> = ({
  loadUserI,
  getCart,
  addProductToCart,
  setAddingTrue,
  cart,
  auth,
}) => {
  useEffect(() => {
    loadUserI();
    console.log(auth.user.cart_id);
    getCart();
  }, [auth.user.cart_id]);

  const IncQuantity = (
    product_name: string,
    product_price: string,
    category: string,
    product_img: string,
    product_id: string
  ) => {
    setAddingTrue();
    addProductToCart({
      product_name,
      product_price,
      category,
      product_img,
      product_id,
    });
  };

  return (
    <CartContainer>
      <CartContents>
        <CartPageName>Shopping Cart</CartPageName>
        <CartItemsAndBillWrapper>
          <CartItems>
            {cart.cartProducts &&
              cart.cartProducts.map((product) => (
                <CartItem>
                  <CartCheckBox>
                    <CheckBox></CheckBox>
                  </CartCheckBox>
                  <MainCartItem>
                    <CartProductImage src={product.product_img} />
                    <CartProductInfo>
                      <CartProductName>{product.product_name}</CartProductName>
                      <CartProductPrice>
                        Rs. {product.product_price}
                      </CartProductPrice>
                      <QuantitySelector>
                        <DescButton> - </DescButton>
                        <ActualQuantity>{product.quantity}</ActualQuantity>
                        <IncButton
                          onClick={() =>
                            IncQuantity(
                              product.product_name,
                              product.product_price,
                              product.category,
                              product.product_img,
                              product.product_id
                            )
                          }
                        >
                          +
                        </IncButton>
                      </QuantitySelector>
                    </CartProductInfo>
                  </MainCartItem>
                </CartItem>
              ))}
          </CartItems>
          <CartBill></CartBill>
        </CartItemsAndBillWrapper>
      </CartContents>
    </CartContainer>
  );
};

const mapStateToProps = (store: MyTypes.ReducerState) => ({
  cart: store.cart,
  auth: store.auth,
});

export default connect(mapStateToProps, {
  getCart,
  loadUserI,
  addProductToCart,
  setAddingTrue,
})(Cart);
