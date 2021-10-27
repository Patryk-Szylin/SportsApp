import { configureStore } from '@reduxjs/toolkit';
import statsReducer from './slices/stats';

export default configureStore({
  reducer: {
    stats: statsReducer,
  },
});
