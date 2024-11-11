import { configureStore } from "@reduxjs/toolkit";
import ProductReducer, { getProduct } from "./productSlice";
import UserReducer from "./userSlice"

export const store = configureStore({reducer:{
  product: ProductReducer,
  ehoppingUser:UserReducer
}});

// store.dispatch(getProduct())
