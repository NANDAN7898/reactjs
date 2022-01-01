import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import uiReducers from "./ui-slice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    ui: uiReducers,
  },
});

export default store;
