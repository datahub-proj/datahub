import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
};

export const screenModeSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setScreenMode: (state) => {
      state.mode = state.mode === "light" ? "light" : "dark";
    },
  },
});

export const { setScreenMode } = screenModeSlice.actions;

export default screenModeSlice.reducer;
