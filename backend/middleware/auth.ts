import config from "config";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const authUser = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("x-auth-token");

  if (!token) {
    return res.json("unauthorized");
  }

  try {
    const decoded = jwt.verify(token, config.get("jwt"));
    // @ts-ignore
    req.user = decoded.user;
    next();
  } catch (err) {
    res.json("server error");
  }
};

export = authUser;
