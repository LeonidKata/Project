import { combineReducers } from '@reduxjs/toolkit';

import { rootApi } from './rootApi';

const placeholderReducer = (state = {}) => state;

export const rootReducer = combineReducers({
  _placeholder: placeholderReducer,
  [rootApi.reducerPath]: rootApi.reducer,
  // Add other reducers here
});
