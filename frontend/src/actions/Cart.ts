import { action } from "typesafe-actions";
import * as MyTypes from "MyTypes";
import { Dispatch } from "redux";
import { CartTypes } from "./types";
import Axios from "axios";

export interface AddProductData {
  cart_id: string;
  product_id: string;
}

export interface CartDataRecieved {
  cart_id: string;
  p_ids: Array<string>;
}

export const cartActions = {
  addProductToCart: (recievedData: CartDataRecieved) =>
    action(CartTypes.ADD_PRODUCT_CART, recievedData),
  removeOne: () => action(CartTypes.REMOVE_ONE_CART),
};

export const addProductToCart = (prodData: AddProductData) => async (
  dispatch: Dispatch<MyTypes.RootAction>
) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await Axios.post<CartDataRecieved>(
      "/api/cart/add_one",
      prodData,
      config
    );
    dispatch({ type: CartTypes.ADD_PRODUCT_CART, payload: res.data });
  } catch (err) {
    console.error(err.message);
  }
};
