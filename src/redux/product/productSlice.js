import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProductAPI, addProductAPI } from "./productAPI";

const initialState = {
  products: [],
  totalProducts: 0,
  status: "idle",
};

export const addProductAsync = createAsyncThunk(
  "product/addProduct",
  async (productToAdd) => {
    const response = await addProductAPI(productToAdd);
    return response;
  }
);

export const fetchProductAsync = createAsyncThunk(
  "product/getProduct",
  async () => {
    const response = await fetchProductAPI();
    return response;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    changeState: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductAsync.fulfilled, (state, action) => {
        state.products = action.payload.product;
        state.status = "idle";
        state.totalProducts = action.payload.totalProducts;
      })
      .addCase(addProductAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addProductAsync.fulfilled, (state, action) => {
        state.products.push(action.payload);
        state.status = "idle"
      });
  },
});

export const { changeState } = productSlice.actions;

export default productSlice.reducer;
