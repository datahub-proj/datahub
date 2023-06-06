import { combineReducers } from "@reduxjs/toolkit";
import screenModeReducer from "features/globals/screenModeSlice";

const rootReducer = combineReducers({
  screenMode: screenModeReducer,
});

export default rootReducer;
