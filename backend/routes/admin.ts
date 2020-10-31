import express from "express";
import pool from "../src/db";
import { v4 as uid } from "uuid";
import { ADD_PRODUCT } from "../src/queries";

const router = express.Router();

router.post("/product_admin", async (req, res) => {
  const { product_name, product_price, category, product_img } = req.body;

  try {
    const addProduct = await pool.query(ADD_PRODUCT, [
      `product${uid()}`,
      product_name,
      product_price,
      category,
      product_img,
    ]);

    if (addProduct.rowCount > 0) {
      console.log(addProduct.rows);
      res.json(addProduct.rows);
    }
  } catch (err) {
    console.log(err.message);
  }
});

export = router;
