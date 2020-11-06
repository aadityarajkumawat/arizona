import { action } from "typesafe-actions";
import * as MyTypes from "MyTypes";
import { Dispatch } from "redux";
import { CartTypes } from "./types";

type cartItems = Array<CartProducts>;

export interface CartProducts {
  product_id: string;
  product_name: string;
  product_price: string;
  category: string;
  product_img: string;
  quantity: number;
  checked: boolean;
}

export interface ProductData {
  product_name: string;
  product_price: string;
  category: string;
  product_img: string;
  product_id: string;
}

export const cartActions = {
  addProductToCart: (productData: cartItems) =>
    action(CartTypes.UPDATE_CART, productData),

  getCart: (dataCart: cartItems) =>
    action(CartTypes.GET_CART_PRODUCTS, dataCart),
};

export const addProductToCart = (productData: ProductData) => (
  dispatch: Dispatch<MyTypes.RootAction>
) => {
  if (localStorage.getItem("cart")) {
    let currentCart = localStorage.getItem("cart");
    if (typeof currentCart === "string") {
      let parsedCart: Array<CartProducts> = JSON.parse(currentCart);
      let count = 0;
      for (let product of parsedCart) {
        if (product.product_id === productData.product_id) {
          count++;
        }
      }
      if (count === 0) {
        dispatch({
          type: CartTypes.UPDATE_CART,
          payload: [
            ...parsedCart,
            { ...productData, quantity: count + 1, checked: true },
          ],
        });
      } else {
        for (let product of parsedCart) {
          if (product.product_id === productData.product_id) {
            product.quantity = product.quantity + 1;
          }
        }
        dispatch({
          type: CartTypes.UPDATE_CART,
          payload: [...parsedCart],
        });
      }
    }
  }
};

export const decProductCount = (productData: ProductData) => (
  dispatch: Dispatch<MyTypes.RootAction>
) => {
  if (localStorage.getItem("cart")) {
    let finalArray = [];
    let toBeDeleted = -1;
    let currentCart = localStorage.getItem("cart");
    if (typeof currentCart === "string") {
      let parsedCart: Array<CartProducts> = JSON.parse(currentCart);
      for (let i = 0; i < parsedCart.length; i++) {
        if (parsedCart[i].product_id === productData.product_id) {
          if (parsedCart[i].quantity > 1) {
            parsedCart[i].quantity = parsedCart[i].quantity - 1;
          } else {
            toBeDeleted = i;
          }
        }
      }
      if (toBeDeleted > -1) {
        let firstArr = JSON.parse(currentCart).splice(0, toBeDeleted);
        let secondArr = JSON.parse(currentCart).splice(
          toBeDeleted + 1,
          parsedCart.length
        );
        finalArray = [...firstArr, ...secondArr];

        dispatch({
          type: CartTypes.UPDATE_CART,
          payload: [...finalArray],
        });
      } else {
        dispatch({
          type: CartTypes.UPDATE_CART,
          payload: [...parsedCart],
        });
      }
    }
  }
};

export const checkUnCheck = (productData: ProductData) => (
  dispatch: Dispatch<MyTypes.RootAction>
) => {
  if (localStorage) {
    let indexToBeUpdated = -1;
    let currentCart = localStorage.getItem("cart");
    if (typeof currentCart === "string") {
      let parsedCart: Array<CartProducts> = JSON.parse(currentCart);

      for (let i = 0; i < parsedCart.length; i++) {
        if (productData.product_id === parsedCart[i].product_id) {
          indexToBeUpdated = i;
        }
      }

      if (indexToBeUpdated !== -1) {
        parsedCart[indexToBeUpdated].checked = !parsedCart[indexToBeUpdated]
          .checked;
      }

      dispatch({ type: CartTypes.UPDATE_CART, payload: [...parsedCart] });
    }
  }
};

export const getCart = () => async (dispatch: Dispatch<MyTypes.RootAction>) => {
  if (localStorage.getItem("cart")) {
    let currentCart = localStorage.getItem("cart");
    if (typeof currentCart === "string") {
      let parsedCart = JSON.parse(currentCart);

      dispatch({ type: CartTypes.GET_CART_PRODUCTS, payload: parsedCart });
    }
  }
};
