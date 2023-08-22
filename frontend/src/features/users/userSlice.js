import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: true,
  username: "admin",
  email: "ithingv34@gmail.com",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.loggedIn = true;
      state.username = action.payload.username;
      state.email = action.payload.email;
    },
    logout: (state) => {
      state.loggedIn = false;
      state.username = null;
      state.email = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
