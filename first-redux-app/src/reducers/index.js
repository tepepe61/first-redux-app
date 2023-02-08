import { combineReducers } from "redux";
import countReducer from "./counter";
import isLoginReducer from "./isLogin";

// 1. reducerフォルダにreducerをまとめるjsを作ってまとめて、最後storeと接続
export const allReducers = combineReducers({
  counter: countReducer,
  isLogin: isLoginReducer,
});
