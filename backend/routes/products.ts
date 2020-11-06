import express from "express";
import pool from "../src/db";
import { FetchedProducts } from "../interfaces/interfaces";

const router = express.Router();

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
