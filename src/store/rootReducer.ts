import { combineReducers } from '@reduxjs/toolkit';

import { rootApi } from './rootApi';

export const rootReducer = combineReducers({
  [rootApi.reducerPath]: rootApi.reducer,
  // Add other reducers here
});
