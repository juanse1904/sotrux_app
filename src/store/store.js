import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import publicWindows from "./publicCopies";

const reducer = combineReducers({
  publicWindows,
});
const store = configureStore({ reducer });

export default store;
