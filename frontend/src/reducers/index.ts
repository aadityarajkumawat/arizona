import { combineReducers } from "redux";
import { authFormReducer } from "./authFormReducer";
import { authReducer } from "./authReducer";
import { navbarReducer } from "./navReducer";

const rootReducer = combineReducers({
  authForm: authFormReducer,
  auth: authReducer,
  nav: navbarReducer,
});

export default rootReducer;
