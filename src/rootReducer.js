import {cartReducers, jsonDataReducers } from "./reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  carts: cartReducers,
  jsonInfo: jsonDataReducers
});

export default rootReducer;