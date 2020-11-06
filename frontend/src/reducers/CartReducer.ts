import * as MyTypes from "MyTypes";
import { CartProducts } from "../actions/Cart";
import { CartTypes } from "../actions/types";

export interface CartReducerState {
  cartProducts: Array<CartProducts>;
}

const init: CartReducerState = {
  cartProducts: [],
};

export const cartReducer = (
  state: CartReducerState = init,
  action: MyTypes.RootAction
): CartReducerState => {
  switch (action.type) {
    case CartTypes.ADD_PRODUCT_CART:
      localStorage.setItem("cart", JSON.stringify(action.payload));
      return {
        ...state,
        cartProducts: action.payload,
      };
    case CartTypes.GET_CART_PRODUCTS:
      return { ...state, cartProducts: action.payload };
    default:
      return state;
  }
};
