import { action } from "typesafe-actions";
import { AddProductState } from "./types";
import * as MyTypes from "MyTypes";
import { Dispatch } from "redux";
import Axios from "axios";

export interface ProductInfo {
  product_name: string;
  product_image: string;
  product_price: string;
  category: string;
}

export const productAction = {
  addProduct: (formData: ProductInfo) =>
    action(AddProductState.ADD_PRODUCT, formData),
};

export const addProduct = (formData: ProductInfo) => async (
  dispatch: Dispatch<MyTypes.RootAction>
) => {
  console.log("before sending req", formData);
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await Axios.post("/api/admin/product_admin", formData, config);
    dispatch({ type: AddProductState.ADD_PRODUCT, payload: res.data });
    console.log(res.data);
  } catch (err) {
    console.log("error while adding product to cart");
  }
};
