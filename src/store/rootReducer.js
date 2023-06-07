import { combineReducers } from "@reduxjs/toolkit";
import brightModeReducer from "features/globals/brightModeSlice";

const rootReducer = combineReducers({
  brightMode: brightModeReducer,
});

export default rootReducer;
