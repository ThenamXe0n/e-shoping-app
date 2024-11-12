import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductAsync = createAsyncThunk("fetchproduct", async () => {
  const res = await axios.get(
    "https://instructor-api-xi.vercel.app/api/product/allproducts"
  );
  const data = res.data;
  return data;
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    product: [],
    totalProduct: 0,
    limit: 0,
  },
  reducers: {
    getProduct: (state, action) => {
      state.product = action.payload;
    },
    addProduct: (state, action) => {
      state.product.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.product.splice(action.payload, 1);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProductAsync.fulfilled, (state, action) => {
      state.product = action.payload.product;
      state.totalProduct = action.payload.totalProducts
    });
  },
});
export const { getProduct, addProduct, deleteProduct, } = productSlice.actions;

export default productSlice.reducer;
