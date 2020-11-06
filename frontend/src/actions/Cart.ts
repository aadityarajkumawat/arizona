import { action } from "typesafe-actions";
import * as MyTypes from "MyTypes";
import { Dispatch } from "redux";
import { CartTypes } from "./types";

export interface AddProductData {
  cart_id: string;
  product_id: string;
}

export interface CartDataRecieved {
  cart_id: string;
  p_ids: Array<string>;
}

export interface ResBodyGetProducts {
  cart_id: string;
}

type cartItems = Array<CartProducts>;

export interface CartProducts {
  product_id: string;
  product_name: string;
  product_price: string;
  category: string;
  product_img: string;
  quantity: number;
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
    action(CartTypes.ADD_PRODUCT_CART, productData),

  removeOne: () => action(CartTypes.REMOVE_ONE_CART),

  getCart: (dataCart: cartItems) =>
    action(CartTypes.GET_CART_PRODUCTS, dataCart),

  addedTrue: () => action(CartTypes.ADDED_TRUE),
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
          type: CartTypes.ADD_PRODUCT_CART,
          payload: [...parsedCart, { ...productData, quantity: count + 1 }],
        });
      } else {
        for (let product of parsedCart) {
          if (product.product_id === productData.product_id) {
            product.quantity = product.quantity + 1;
          }
        }
        console.log(count);
        dispatch({
          type: CartTypes.ADD_PRODUCT_CART,
          payload: [...parsedCart],
        });
      }
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
