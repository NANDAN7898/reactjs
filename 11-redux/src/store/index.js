// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter-slice";
import authReducer from "./auth-slice";

// const store = createStore(counterReducer);

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
