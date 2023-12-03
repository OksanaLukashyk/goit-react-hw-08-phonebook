import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';
import { instance } from 'redux/auth/auth.operations';

// export const instance = axios.create({
//   baseURL: 'https://65665f5d64fcff8d730ebca0.mockapi.io/',
// });

// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchAll',
//   async (_, thunkAPI) => {
//     try {
//       const { data } = await instance.get(`/contacts`);
//       return data;
//     } catch (error) {
//       Notify.error(`Oops, some error occured... Please try again`, {
//         timeout: 6000,
//       });
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async (contact, thunkAPI) => {
//     try {
//       const { name, phone } = contact;
//       const { data } = await instance.post(`/contacts`, { name, phone });
//       return data;
//     } catch (error) {
//       Notify.error(`Oops, some error occured... Please try again`, {
//         timeout: 6000,
//       });
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async (id, thunkAPI) => {
//     try {
//       const { data } = await instance.delete(`/contacts/${id}`);
//       return data;
//     } catch (error) {
//       Notify.error(`Oops, some error occured... Please try again`, {
//         timeout: 6000,
//       });
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get(`/contacts`);
      console.log('data contact ops: ', data);
      return data;
    } catch (error) {
      Notify.error(`Oops, some error occured... Please try again`, {
        timeout: 6000,
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const { name, number } = contact;
      const { data } = await instance.post(`/contacts`, { name, number });
      return data;
    } catch (error) {
      Notify.error(`Oops, some error occured... Please try again`, {
        timeout: 6000,
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const { data } = await instance.delete(`/contacts/${id}`);
      return data;
    } catch (error) {
      Notify.error(`Oops, some error occured... Please try again`, {
        timeout: 6000,
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
