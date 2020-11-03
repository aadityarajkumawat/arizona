import * as MyTypes from "MyTypes";
import { ProductTypes } from "../actions/types";

export interface FetchedProduct {
  product_id: string;
  product_name: string;
  product_price: string;
  category: string;
  product_img: string;
}

export interface ProductStateI {
  products: Array<FetchedProduct>;
}

const init: ProductStateI = {
  products: [],
};

export const productReducer = (
  state: ProductStateI = init,
  action: MyTypes.RootAction
): ProductStateI => {
  const { GET_PRODUCTS } = ProductTypes;
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};
