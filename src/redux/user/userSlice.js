import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { logginUserAPI, registerUserAPI } from "./userAPI";

export const registerUserAsync = createAsyncThunk(
  "user/register",
  async (userInfo) => {
    // Your API call here
    const response = await registerUserAPI(userInfo);
    return response;
  }
);
export const logginUserAsync = createAsyncThunk(
  "user/login",
  async (userInfo) => {
    // Your API call here
    const response = await logginUserAPI(userInfo);
    console.log("async response", response);
    return response;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {
      name: null,
      email: null,
      contact: null,
    },
    isLoggedIn: false,
    status: "idle",
    isRegistered: false,
    token: null,
  },
  reducers: {
    loadLoggedInUser: (state) => {
      let checkUser = localStorage.getItem("userInfo");
      let token  = localStorage.getItem("token")
      console.log("checking user login",checkUser)
      if (checkUser && token) {
        state.isLoggedIn = true;
        state.userInfo = JSON.parse(checkUser);
        state.token = token
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registerUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.isRegistered = true;
      })
      .addCase(logginUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(logginUserAsync.fulfilled, (state, action) => {
        console.log(JSON.stringify(action.payload));
        state.status = "idle";
        state.userInfo = action.payload.userdata;
        localStorage.setItem(
          "userInfo",
          JSON.stringify(action.payload.userdata)
        );
        state.isLoggedIn = true;
        state.token = action.payload.token;
        localStorage.setItem("token",JSON.stringify(action.payload.token))
        alert("logged in successfully");
      });
  },
});

export const {loadLoggedInUser} = userSlice.actions

export default userSlice.reducer;
