import { combineReducers } from "redux";
import { authFormReducer } from "./authFormReducer";
import { authReducer } from "./authReducer";

const rootReducer = combineReducers({
  authForm: authFormReducer,
  auth: authReducer,
});

export default rootReducer;
