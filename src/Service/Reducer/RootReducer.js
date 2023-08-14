import { combineReducers } from "redux";
import productReducer from "./ProductReducer";
import authReducer from "./AuthReducer";
import userReducer from "./UserReducer";
const rootReducer = combineReducers({
  productReducer,authReducer,userReducer
});

export default rootReducer;