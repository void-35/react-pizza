import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import filterSlice from "./slices/filterSlice";
import sortSlice from "./slices/sortSlice";

export const store = configureStore({
  reducer: { filter: filterSlice, sort: sortSlice, cards: cartSlice },
});