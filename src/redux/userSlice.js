import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const userSlice = createSlice({
  name: "User",
  initialState: {
    userDetails: {
        name:null,
        email:null,
        address:[],
        phone:null,
    },
    cartItem: 0,
    userorders: 5,
  },
  reducers: {
    getProduct: async (state) => {
      let res = await axios.get(
        "https://instructor-api-xi.vercel.app/api/product/allproducts"
      );
      let product = res.data.product;
      state.userDetails = product;
    },

  },
});


export default userSlice.reducer