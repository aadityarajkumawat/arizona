import { combineReducers } from "redux";
import { authFormReducer } from "./authFormReducer";
import { authReducer } from "./authReducer";
import { navbarReducer } from "./navReducer";
import { productReducer } from "./productReducer";

const rootReducer = combineReducers({
  authForm: authFormReducer,
  auth: authReducer,
  nav: navbarReducer,
  product: productReducer,
});

export default rootReducer;
