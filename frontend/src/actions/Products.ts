import { action } from "typesafe-actions";
import { ProductTypes } from "../actions/types";
import { Dispatch } from "redux";
import * as MyTypes from "MyTypes";
import { FetchedProduct } from "../reducers/productReducer";
import Axios from "axios";

export const productActions = {
  getProducts: (productsArray: Array<FetchedProduct>) =>
    action(ProductTypes.GET_PRODUCTS, productsArray),
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
