import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: true,
  email: "ithingv34@gmail.com",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.loggedIn = true;
      state.email = action.payload;
    },
    logout: (state) => {
      state.loggedIn = false;
      state.email = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
