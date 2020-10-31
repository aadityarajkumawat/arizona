import express from "express";
import pool from "../src/db";
import authUser from "../middleware/auth";
import { ADD_CART, GET_CART, INSERT_CART, REMOVE_ONE } from "../src/queries";
import { ProductInfo } from "../interfaces/interfaces";
import {
  getStringArray,
  removeFirstOccurence,
} from "../helpers/removeFirstOccurence";

const router = express.Router();

router.post("/add_one", authUser, async (req, res) => {
  const { cart_id, product_id } = req.body;
  try {
    let userCart = await pool.query(GET_CART, [cart_id]);

    if (userCart.rowCount < 1) {
      userCart = await pool.query(INSERT_CART, [cart_id, product_id]);

      if (userCart.rowCount > 0) {
        return res.json(userCart.rows[userCart.rowCount - 1]);
      }
    } else {
      userCart = await pool.query(ADD_CART, [product_id, cart_id]);

      if (userCart.rowCount > 0) {
        return res.json(userCart.rows[userCart.rowCount - 1]);
      }
    }
  } catch (err) {
    res.json(err.message);
  }
});

router.post("/remove_one", authUser, async (req, res) => {
  const { cart_id, product_id } = req.body;
  try {
    let productToRemove = await pool.query<ProductInfo, Array<string>>(
      GET_CART,
      [cart_id]
    );
    let productsIds: Array<string> = [];

    if (productToRemove.rows.length > 0) {
      productsIds = productToRemove.rows[productToRemove.rowCount - 1].p_ids;
    }

    if (productsIds.length === 1) {
      const emptyArray = await pool.query("DELETE FROM carts");
      if (emptyArray.rows.length === 0) {
        return res.json("cart cart is now empty");
      }
    } else if (productToRemove.rows.length === 0) {
      return res.json("cart is empty");
    }

    const newProducts = removeFirstOccurence(productsIds, product_id);

    if (newProducts.length !== productsIds.length) {
      // Set new array
      let finalCartState = await pool.query<ProductInfo, Array<string>>(
        REMOVE_ONE(getStringArray, newProducts),
        [cart_id]
      );

      return res.json(finalCartState.rows[finalCartState.rowCount - 1]);
    } else {
      return res.json("no product");
    }
  } catch (err) {
    console.log(err.message);
  }
});

export = router;
