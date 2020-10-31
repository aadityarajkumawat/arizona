export const ALREADY_EXIST = "SELECT * FROM users WHERE email=$1 or phone=$2";
export const ADD_USER =
  "INSERT INTO users (user_id, name, email, password, phone, cart_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *";
export const GET_AUTH_USER =
  "SELECT user_id, name, email, phone, cart_id FROM users";
export const GET_USER_BY_EMAIL = "SELECT * FROM users WHERE email=$1";
export const ADD_PRODUCT =
  "INSERT INTO products (product_id, product_name, product_price, category, product_img) VALUES ($1, $2, $3, $4, $5) RETURNING *";
export const INSERT_CART =
  "INSERT INTO carts (cart_id, p_ids) VALUES ($1,ARRAY [$2]) RETURNING *;";
export const ADD_CART =
  "UPDATE carts SET p_ids=array_append(p_ids, $1) WHERE cart_id=$2 RETURNING *";
export const GET_CART = "SELECT * FROM carts WHERE cart_id=$1";

// PARAMETER QUERIES
export const REMOVE_ONE = (
  fetchArrayStr: (arr: Array<string>) => string,
  newP: Array<string>
): string => {
  return (
    `UPDATE carts SET p_ids=ARRAY` +
    fetchArrayStr(newP) +
    ` WHERE cart_id=$1 RETURNING *`
  );
};
