import { combineReducers } from "@reduxjs/toolkit";
import brightModeReducer from "features/globals/brightModeSlice";
import userReducer from "features/users/userSlice";

const rootReducer = combineReducers({
  brightMode: brightModeReducer,
  user: userReducer,
});

export default rootReducer;
