import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./product/productSlice"

export const store = configureStore({reducer:{
  product: ProductReducer,
}});

// store.dispatch(getProduct())
