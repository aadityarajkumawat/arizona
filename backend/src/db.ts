import pg from "pg";
import config from "config";

const pool = new pg.Pool({
  user: config.get("user"),
  password: config.get("password"),
  host: config.get("host"),
  port: 5432,
  database: config.get("database"),
});

export = pool;
