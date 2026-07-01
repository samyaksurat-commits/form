import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slice";
import themeReducer from "./Slice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    theme:themeReducer,
  },
});