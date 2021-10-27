import { createSlice } from '@reduxjs/toolkit';
import { getStats } from './thunks';

const statsSlice = createSlice({
  name: 'stats',
  initialState: {
    footballStats: [],
  },
  reducers: {
    setStats: (state, { payload }) => {
      state.footballStats = payload;
    },
  },
  // Declarative approach
  extraReducers: {
    [getStats.fulfilled]: (state, { payload }) => {
      state.footballStats = payload.data;
    },
  },
});

export const { setStats } = statsSlice.actions;

export default statsSlice.reducer;
