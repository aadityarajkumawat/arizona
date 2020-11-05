import * as MyTypes from "MyTypes";
import { CartTypes } from "../actions/types";

export interface CartReducerState {
  cart_id: string;
  products: Array<string>;
}

const init: CartReducerState = {
  cart_id: "",
  products: [],
};

export const cartReducer = (
  state: CartReducerState = init,
  action: MyTypes.RootAction
): CartReducerState => {
  switch (action.type) {
    case CartTypes.ADD_PRODUCT_CART:
      return {
        ...state,
        cart_id: action.payload.cart_id,
        products: action.payload.p_ids,
      };
    default:
      return state;
  }
};
