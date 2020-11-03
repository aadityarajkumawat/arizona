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
  categorySearched: string;
}

const init: ProductStateI = {
  products: [],
  categorySearched: "",
};

export const productReducer = (
  state: ProductStateI = init,
  action: MyTypes.RootAction
): ProductStateI => {
  const { GET_PRODUCTS, SET_CATEGORY, CLEAR_SEARCH } = ProductTypes;
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: action.payload };
    case SET_CATEGORY:
      return { ...state, categorySearched: action.payload };
    case CLEAR_SEARCH:
      return { ...state, categorySearched: "", products: [] };
    default:
      return state;
  }
};
