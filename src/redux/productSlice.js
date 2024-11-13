import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    product: 0,
  },
  reducers: {
    add: (state) => {
      state.product += 1;
    },
  },
});

export const {add} = productSlice.actions;

export default productSlice