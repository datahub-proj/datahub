import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  // userId: "63701cc1f03239b7f700000e"
};

export const brightModeSlice = createSlice({
  name: "brightMode",
  initialState,
  reducers: {
    togglebrightMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { togglebrightMode } = brightModeSlice.actions;

export default brightModeSlice.reducer;
