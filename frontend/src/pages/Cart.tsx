import React from "react";
import QuantitySelector from "../components/quantity-selector/QuantitySelector";
import {
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
  ItemQuantityPicker,
  MainCartItem,
  QuantityOptions,
} from "./cart.styles";

interface Props {}

const Cart: React.FC<Props> = () => {
  return (
    <CartContainer>
      <CartContents>
        <CartPageName>Shopping Cart</CartPageName>
        <CartItemsAndBillWrapper>
          <CartItems>
            <CartItem>
              <CartCheckBox>
                <CheckBox></CheckBox>
              </CartCheckBox>
              <MainCartItem>
                <CartProductImage />
                <CartProductInfo>
                  <CartProductName>Product Name</CartProductName>
                  <CartProductPrice>Rs. 63543</CartProductPrice>
                  <QuantitySelector />
                </CartProductInfo>
              </MainCartItem>
            </CartItem>

            <CartItem>
              <CartCheckBox>
                <CheckBox></CheckBox>
              </CartCheckBox>
              <MainCartItem>
                <CartProductImage />
                <CartProductInfo>
                  <CartProductName>Product Name</CartProductName>
                  <CartProductPrice>Rs. 63543</CartProductPrice>
                  <QuantitySelector />
                </CartProductInfo>
              </MainCartItem>
            </CartItem>

            <CartItem>
              <CartCheckBox>
                <CheckBox></CheckBox>
              </CartCheckBox>
              <MainCartItem>
                <CartProductImage />
                <CartProductInfo>
                  <CartProductName>Product Name</CartProductName>
                  <CartProductPrice>Rs. 63543</CartProductPrice>
                  <QuantitySelector />
                </CartProductInfo>
              </MainCartItem>
            </CartItem>
          </CartItems>
          <CartBill></CartBill>
        </CartItemsAndBillWrapper>
      </CartContents>
    </CartContainer>
  );
};
export default Cart;
