import { createStore } from 'redux';
import tasksReducer from './tasksReducer';

const Store = createStore(tasksReducer);

export default Store;
