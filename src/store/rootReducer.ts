import { combineReducers } from "@reduxjs/toolkit";

const placeholderReducer = (state = {}) => state;

export const rootReducer = combineReducers({
  _placeholder: placeholderReducer
})