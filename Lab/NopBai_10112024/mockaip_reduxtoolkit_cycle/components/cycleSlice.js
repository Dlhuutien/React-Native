import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//load mockAPI
export const fetchCycles = createAsyncThunk(
  'cycles/fetchCycles',
  async (category) => {
    let apiUrl = 'https://67301a6966e42ceaf15f58da.mockapi.io/cycle';
    if (category) {
      apiUrl += `?category=${category}`;
    }
    const response = await axios.get(apiUrl);
    return response.data;
  }
);

//add mockAPI
export const addCycle = createAsyncThunk(
  'cycles/addCycle',
  async (newCycle) => {
    const response = await axios.post('https://67301a6966e42ceaf15f58da.mockapi.io/cycle', newCycle);
    return response.data;
  }
);

const cycleSlice = createSlice({
  name: 'cycles',
  initialState: {
    cycles: [],
    selectedCategory: '',
  },
  reducers: {
    //lấy cycle thuộc category
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
   builder
      //trả về kqua load
      .addCase(fetchCycles.fulfilled, (state, action) => {
        state.cycles = action.payload;
      })
      //add cycle
      .addCase(addCycle.fulfilled, (state, action) => {
        state.cycles.push(action.payload);
      });
  },
});

export const { setCategory } = cycleSlice.actions;
export default cycleSlice.reducer;
