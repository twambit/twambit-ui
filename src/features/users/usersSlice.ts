import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { type MyUser } from '../../types/user';
import fakeData from '../../data/fakeData';

export interface MyState {
  users: MyUser[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: any;
}
const initialState: MyState = {
  users: [],
   status: 'idle',
  error: null,
};


    const getInitialState = (): MyState => {
      try {
        const serializedData = localStorage.getItem('userItems');
        if (serializedData === null) {
              
          return { users: fakeData as MyUser[], status:'succeeded', error: null };
        }
        return JSON.parse(serializedData);
      } catch (error) {
        console.error("Error loading from localStorage:", error);
        return initialState;
      }
    };
// Async thunk to post data to the API

export const saveBulkUsers = createAsyncThunk(
  'list/saveBulkUsers', // Action type prefix
  async (userList: MyUser[], { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:3001/api/users/saveBulkUsers', userList); // Replace with your API endpoint
      return response.data; // The data returned on success
    } catch (error: any) {
      return rejectWithValue(error.response.data); // Handle API errors
    }
  }
);

    const initialStateLoad: MyState= getInitialState();

export const usersSlice = createSlice({
  name: 'list',
  initialState: initialState,
  reducers: {
    loadFromLocalStorage: (state) => {
      const storedUsers = localStorage.getItem('userItems');
      if (storedUsers) {
        state.users = JSON.parse(storedUsers);
      }
      else{
        state.users = fakeData as MyUser[];
        localStorage.setItem('userItems', JSON.stringify(state.users)); 
      }
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
      localStorage.setItem('userItems', JSON.stringify(state.users));
    },
       updateFavorite: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;
      const existingItem = state.users.find(item => item.id === id);
      if (existingItem) {
        existingItem.isFavorite = !existingItem.isFavorite;
        localStorage.setItem('userItems', JSON.stringify(state.users));
      }
    },
  },
   extraReducers: (builder) => {
    builder
      .addCase(saveBulkUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(saveBulkUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users.push(...action.payload); // Add the saved items to the list
      })
      .addCase(saveBulkUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { addUser, updateFavorite, loadFromLocalStorage } = usersSlice.actions;

export default usersSlice.reducer;
