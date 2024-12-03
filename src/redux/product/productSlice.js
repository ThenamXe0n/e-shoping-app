import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllProductsAPI } from "./productAPI";

const initialState = {
  product: [],
  status: "idle",
};

export const fetchAllProductsAsync = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetchAllProductsAPI();
    return response;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    add: (state) => {
      state.product += 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllProductsAsync.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
      state.product = action.payload;
      state.status = "loaded";
    });
  },
});

export const { add } = productSlice.actions;

export default productSlice.reducer;
