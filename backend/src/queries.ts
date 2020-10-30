export const ALREADY_EXIST = "SELECT * FROM users WHERE email=$1 or phone=$2";
export const ADD_USER =
  "INSERT INTO users (user_id, name, email, password, phone, cart_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *";
