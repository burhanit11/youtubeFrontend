import { combineReducers } from "@reduxjs/toolkit";

// reducer
import authUserReducer from "./authUser";

const rootReducer = combineReducers({
  authUser: authUserReducer,
});

export default rootReducer;
