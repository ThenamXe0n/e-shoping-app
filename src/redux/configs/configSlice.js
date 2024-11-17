import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalVisible: false,
};

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.isModalVisible = !state.isModalVisible;
    },
  },
});

export const { toggleModal } = configSlice.actions;

export default configSlice.reducer;
