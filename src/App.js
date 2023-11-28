// App.js
import './App.css'
import React from 'react';
import { Provider } from 'react-redux';
import Store from './store';
import AddTask from './AddTask';
import ListTask from './ListTask';

const App = () => {
  return (
    <Provider store={Store}>
      <div>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
};

export default App;
