import express from "express";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { isUserDataValid } from "../validations/validations";
import pool from "../src/db";
import { v4 as uid } from "uuid";
import config from "config";
import { ADD_USER, ALREADY_EXIST } from "../src/queries";
import { UserI } from "../interfaces/interfaces";

const router = express.Router();

//* Create a new user
router.post("/", async (req, res) => {
  const { name, email, password, phone } = req.body;
  if (await isUserDataValid(name, email, password, phone)) {
    //   Hash password
    const salt = await bcryptjs.genSalt(10);
    let hashedPassword = await bcryptjs.hash(password, salt);
    try {
      // Check if user already exist
      const alreadyExist = await pool.query<UserI, Array<string>>(
        ALREADY_EXIST,
        [email, phone]
      );
      if (alreadyExist.rowCount > 0) {
        return res.json("user already exist");
      } else {
        // Create a new user
        const addANewUser = await pool.query<UserI, Array<string>>(ADD_USER, [
          "user" + uid(),
          name,
          email,
          hashedPassword,
          phone,
          "cart" + uid(),
        ]);

        const payload = {
          user: {
            id: addANewUser.rows[addANewUser.rowCount - 1].user_id,
          },
        };
        // Sign a JWT token
        jwt.sign(
          payload,
          config.get("jwt"),
          { expiresIn: 360000 },
          (err, token) => {
            if (err) {
              throw err;
            }
            // Respond with token
            return res.json({ token });
          }
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  }
});

export = router;
