import { combineReducers } from "redux";
import { authFormReducer } from "./authFormReducer";
import { authReducer } from "./authReducer";
import { cartReducer } from "./CartReducer";
import { navbarReducer } from "./navReducer";
import { productReducer } from "./productReducer";

const rootReducer = combineReducers({
  authForm: authFormReducer,
  auth: authReducer,
  nav: navbarReducer,
  product: productReducer,
  cart: cartReducer,
});

export default rootReducer;
