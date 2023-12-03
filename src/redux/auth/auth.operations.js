import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

const setToken = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// const unsetToken = () => {
//   instance.defaults.headers.common.Authorization = '';
// };

export const logIn = createAsyncThunk(
  'auth/login',
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post('/users/login', formData);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (formData, thunkAPI) => {
    try {
      const { data } = await instance.post('/users/signup', formData);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    // if (persistedToken === null) {
    //   // If there is no token, exit without performing any request
    //   return thunkAPI.rejectWithValue('Unable to fetch user');
    // }

    try {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;
      setToken(persistedToken);
      const { data } = await instance.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkApi) => {
      const state = thunkApi.getState();
      const persistedToken = state.auth.token;
      if (!persistedToken) return false;
      return true;
    },
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    // await instance.post('/users/logout');
    const { data } = await instance.post('/users/logout');
    return data;
    // unsetToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
