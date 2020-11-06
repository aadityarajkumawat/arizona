import React, { useEffect, useState } from "react";
import {
  ActualQuantity,
  BillFieldContainer,
  BillFieldName,
  BillFieldValue,
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
  CheckoutButton,
  DescButton,
  IncButton,
  MainCartItem,
  QuantitySelector,
  WhenCartIsEmpty,
} from "./cart.styles";
import {
  getCart,
  addProductToCart,
  ProductData,
  decProductCount,
  checkUnCheck,
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
  decProductCount: (prodData: ProductData) => void;
  checkUnCheck: (prodData: ProductData) => void;
}

const Cart: React.FC<Props> = ({
  loadUserI,
  getCart,
  addProductToCart,
  decProductCount,
  checkUnCheck,
  cart,
  auth,
}) => {
  const [bill, setBill] = useState<number>(0);

  useEffect(() => {
    loadUserI();
    getCart();
  }, [auth.user.cart_id]);

  useEffect(() => {
    getTotalBill();
  }, [JSON.stringify(cart.cartProducts)]);

  const IncQuantity = (
    product_name: string,
    product_price: string,
    category: string,
    product_img: string,
    product_id: string
  ) => {
    addProductToCart({
      product_name,
      product_price,
      category,
      product_img,
      product_id,
    });
  };

  const DecQuantity = (
    product_name: string,
    product_price: string,
    category: string,
    product_img: string,
    product_id: string
  ) => {
    decProductCount({
      product_name,
      product_price,
      category,
      product_img,
      product_id,
    });
  };

  const getTotalBill = () => {
    let totalBill = 0;
    for (let product of cart.cartProducts) {
      if (product.checked) {
        totalBill += Number(product.product_price) * product.quantity;
      }
    }
    setBill(totalBill);
  };

  return (
    <CartContainer>
      <CartContents>
        <CartPageName>Shopping Cart</CartPageName>
        <CartItemsAndBillWrapper>
          <CartItems>
            {cart.cartProducts.length > 0 ? (
              cart.cartProducts.map((product) => (
                <CartItem>
                  <CartCheckBox>
                    <CheckBox
                      checkB={product.checked}
                      onClick={() => checkUnCheck(product)}
                    ></CheckBox>
                  </CartCheckBox>
                  <MainCartItem>
                    <CartProductImage src={product.product_img} />
                    <CartProductInfo>
                      <CartProductName>{product.product_name}</CartProductName>
                      <CartProductPrice>
                        Rs. {product.product_price}
                      </CartProductPrice>
                      <QuantitySelector>
                        <DescButton
                          onClick={() =>
                            DecQuantity(
                              product.product_name,
                              product.product_price,
                              product.category,
                              product.product_img,
                              product.product_id
                            )
                          }
                        >
                          -
                        </DescButton>
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
              ))
            ) : (
              <WhenCartIsEmpty>Your cart is empty \__/</WhenCartIsEmpty>
            )}
          </CartItems>
          <CartBill>
            <BillFieldContainer>
              <BillFieldName>Total Items:</BillFieldName>
              <BillFieldValue>{cart.cartProducts.length}</BillFieldValue>
            </BillFieldContainer>
            <BillFieldContainer>
              <BillFieldName>Total Bill:</BillFieldName>
              <BillFieldValue>Rs. {bill}</BillFieldValue>
            </BillFieldContainer>
            <BillFieldContainer>
              <BillFieldName>Delivery Charges</BillFieldName>
              <BillFieldValue>Rs. 100</BillFieldValue>
            </BillFieldContainer>

            <CheckoutButton>Checkout</CheckoutButton>
          </CartBill>
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
  decProductCount,
  checkUnCheck,
})(Cart);
