import express from "express";
import pool from "../src/db";
import authUser from "../middleware/auth";
import { ADD_CART, GET_CART, INSERT_CART, REMOVE_ONE } from "../src/queries";
import { CartProducts, ProductInfo } from "../interfaces/interfaces";
import {
  getStringArray,
  removeFirstOccurence,
} from "../helpers/removeFirstOccurence";
import { v4 as uid } from "uuid";

const router = express.Router();

interface ProductIdArray {
  p_ids: Array<string>;
}

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
      userCart = await pool.query("SELECT p_ids FROM carts WHERE cart_id=$1", [
        cart_id,
      ]);

      let initialItems = userCart.rows[0].p_ids.length;

      userCart = await pool.query(ADD_CART, [product_id, cart_id]);

      if (initialItems < userCart.rows[userCart.rowCount - 1].p_ids.length) {
        return res.json(`--ADDED--${uid()}`);
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

router.post("/", authUser, async (req, res) => {
  const { cart_id } = req.body;
  try {
    const getAllProducts = await pool.query<ProductIdArray, Array<string>>(
      "SELECT p_ids FROM carts WHERE cart_id=$1",
      [cart_id]
    );

    if (getAllProducts.rowCount > 0) {
      const allPids = getAllProducts.rows[getAllProducts.rowCount - 1].p_ids;
      const uniqueIds = allPids.filter((c, index) => {
        return allPids.indexOf(c) === index;
      });

      let quantity = 0;
      let finalData: Array<CartProducts> = [];
      for (let pid of uniqueIds) {
        quantity = 0;
        const getThisProduct = await pool.query(
          "SELECT * FROM products WHERE product_id=$1",
          [pid]
        );

        for (let duplicateID of allPids) {
          if (duplicateID === pid) {
            quantity++;
          }
        }

        finalData.push({ ...getThisProduct.rows[0], quantity: quantity });
      }
      res.status(200).json(finalData);
    }
  } catch (err) {
    console.log(err.message);
    res.status(400).json("unable to fetch products");
  }
});

export = router;
