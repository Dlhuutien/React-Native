import { configureStore } from '@reduxjs/toolkit';
import cycleReducer from './cycleSlice';

const store = configureStore({
  reducer: {
    cycles: cycleReducer,
  },
});

export default store;
