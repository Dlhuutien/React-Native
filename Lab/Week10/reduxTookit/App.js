import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TaskApp from './TaskApp';

export default function App() {
  return (
    <Provider store={store}>
      <TaskApp />
    </Provider>
  );
}
