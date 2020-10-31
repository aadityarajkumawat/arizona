import express from "express";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { isLoginDataValid } from "../validations/validations";
import pool from "../src/db";
import config from "config";
import authUser from "../middleware/auth";
import { GET_AUTH_USER, GET_USER_BY_EMAIL } from "../src/queries";
import { UserI } from "../interfaces/interfaces";

const router = express.Router();

router.get("/", authUser, async (_, res) => {
  try {
    const getAuthenticatedUser = await pool.query(GET_AUTH_USER);
    res.json(getAuthenticatedUser.rows[getAuthenticatedUser.rowCount - 1]);
  } catch (err) {
    res.json("server error");
  }
});

router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (await isLoginDataValid(email, password)) {
      let user = await pool.query<UserI, Array<string>>(GET_USER_BY_EMAIL, [
        email,
      ]);

      if (user.rowCount < 1) {
        return res.json({ errors: [{ msg: "user does not exist" }] });
      }

      const doesPasswordMatch = await bcryptjs.compare(
        password,
        user.rows[user.rowCount - 1].password
      );
      if (!doesPasswordMatch) {
        return res.json({ errors: [{ msg: "user does not exist" }] });
      }

      const payload = {
        user: {
          id: user.rows[user.rowCount - 1].user_id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwt"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    }
  } catch (err) {
    console.log(err.message);
  }
});

export = router;
