import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  loggedInUserData: {},
  status: "empty",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getFromLocal: (state) => {
      state.isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
      state.loggedInUserData = JSON.parse(localStorage.getItem("userData"));
      state.isLoggedIn ? (state.status = "LoggedIn") : (state.status = "empty");
    },
    logoutLocal: (state) => {
      localStorage.removeItem("userData");
      localStorage.removeItem("isLoggedIn");
      state.isLoggedIn = false;
      state.loggedInUserData = {};
      state.status = "empty";
      window.alert("Logout Successful!");
    },
    loginLocal: (state,actions) => {
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("userData", JSON.stringify(actions.payload));
    },
  },
});

export const { getFromLocal, logoutLocal, loginLocal } = authSlice.actions;

export default authSlice.reducer;
