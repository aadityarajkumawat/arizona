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

export interface FetchedProducts {
  product_id: string;
  product_name: string;
  product_price: string;
  category: string;
  product_img: string;
}

export interface CartProducts {
  product_id: string;
  product_name: string;
  product_price: string;
  category: string;
  product_img: string;
  quantity: number;
}
