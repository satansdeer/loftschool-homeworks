import React from 'react';
import './App.css';
import Todo from '../Todo';
import WithLocalstorage from '../../containers/WithLocalstorage';

const App = () => (
  <main className="main">
    <div className="main__cell">
      <WithLocalstorage component={Todo} />
    </div>
  </main>
);

export default App;
