import { API_URL } from '@env';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//https://redux-toolkit.js.org/api/createAsyncThunk
export const getStats = createAsyncThunk(
  // Name of the action.
  'stats/getStatsForWorkout',
  async (_, { dispatch, getState }) => {
    // const res = await axios.get(`${API_URL}/stats`);
    console.log('fetching stats');

    // return res.data;
    return {
      data: [
        {
          id: 1,
        },
        {
          id: 2,
        },
      ],
    };
  },
);
