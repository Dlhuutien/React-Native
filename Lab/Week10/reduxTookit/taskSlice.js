import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [
    { id: '1', title: 'Celia Lakin' },
    { id: '2', title: 'Hedio Varni' }
  ],
  reducers: {
    addTask: (state, action) => {
      state.push({ id: action.payload.id, title: action.payload.title });
    },
    changeTask: (state, action) => {
      const index = state.findIndex(task => task.id === action.payload.id);
      if (index >= 0) {
        state[index] = action.payload;
      }
    },
    deleteTask: (state, action) => {
      return state.filter(task => task.id !== action.payload.id);
    },
  },
});

export const { addTask, changeTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
