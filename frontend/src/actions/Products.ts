import { action } from "typesafe-actions";
import { ProductTypes } from "../actions/types";
import { Dispatch } from "redux";
import * as MyTypes from "MyTypes";
import { FetchedProduct } from "../reducers/productReducer";
import Axios from "axios";

export const productActions = {
  getProducts: (productsArray: Array<FetchedProduct>) =>
    action(ProductTypes.GET_PRODUCTS, productsArray),
  setCategory: (cate: string) => action(ProductTypes.SET_CATEGORY, cate),
  clearSearch: () => action(ProductTypes.CLEAR_SEARCH),
};

export const getProducts = (categoryToBeFetched: string) => async (
  dispatch: Dispatch<MyTypes.RootAction>
) => {
  try {
    const res = await Axios.get(`/api/products/${categoryToBeFetched}`);
    dispatch({ type: ProductTypes.GET_PRODUCTS, payload: res.data });
  } catch (err) {
    console.log(err.message);
  }
};

export const setCategory = (cate: string) => (
  dispatch: Dispatch<MyTypes.RootAction>
) => {
  dispatch({ type: ProductTypes.SET_CATEGORY, payload: cate });
};

export const clearSearch = () => (dispatch: Dispatch<MyTypes.RootAction>) => {
  dispatch({ type: ProductTypes.CLEAR_SEARCH });
};
