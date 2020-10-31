export interface UserI {
  user_id: string;
  email: string;
  password: string;
  phone: string;
  cart_id: string;
  name: string;
}

export interface ProductInfo {
  cart_id: string;
  p_ids: Array<string>;
}
