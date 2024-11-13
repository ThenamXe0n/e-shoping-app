import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./productSlice"

export const store = configureStore({reducer:{
    product: ProductReducer
}})
