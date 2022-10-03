import { configureStore } from '@reduxjs/toolkit';
import { masterReducer } from './reducers/masterReducer';

const store = configureStore({
  reducer: masterReducer,
});

export default store;
