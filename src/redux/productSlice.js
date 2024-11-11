import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productSlice = createSlice({
  name: "product",
  initialState: {
    product: [],
    totalProduct: 0,
    limit: 0,
  },
  reducers: {
    getProduct:  (state) => {
    
      let product = res.data.product;
      state.product +=1;
    },
    addProduct:(state,action)=>{
        state.product.push(action.payload.product);
    }
  },
});
export const { getProduct,addProduct } = productSlice.actions


export default productSlice.reducer