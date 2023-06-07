import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
};

export const brightModeSlice = createSlice({
  name: "brightMode",
  initialState,
  reducers: {
    setBrightMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { setBrightMode } = brightModeSlice.actions;

export default brightModeSlice.reducer;
