import express from "express";
import pool from "../src/db";

const router = express.Router();

interface FetchedProducts {
  product_id: string;
  product_name: string;
  product_price: string;
  category: string;
  product_img: string;
}

router.get("/:category", async (req, res) => {
  try {
    const category = req.params.category;
    const products = await pool.query<FetchedProducts, Array<string>>(
      "SELECT * FROM products WHERE category=$1",
      [category]
    );

    res.status(200).json(products.rows);
  } catch (err) {
    res.status(400).json("Error fetching products");
  }
});

export = router;
