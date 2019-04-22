import React from 'react';
import './App.css';
import Todo from '../../components/organisms/Todo';
import WithLocalstorage from '../WithLocalstorage';

const App = () => (
  <main className="main">
    <div className="main__cell">
      <WithLocalstorage component={Todo} />
    </div>
  </main>
);

export default App;
