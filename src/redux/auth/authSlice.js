import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  LoggedInUserData: {},
  status: "empty",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
});

export default authSlice.reducer;
