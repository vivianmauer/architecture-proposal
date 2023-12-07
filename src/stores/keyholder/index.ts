import { configureStore } from '@reduxjs/toolkit'
import { holdersSlice } from './features/holders/slice';
import { apiSlice } from '../api';

const keyHolderStore = configureStore({
  reducer: {
    holders: holdersSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware)
});

export default keyHolderStore;