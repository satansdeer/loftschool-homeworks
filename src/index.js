import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from 'components/AppRouter';
import getStore from './store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const store = getStore();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// Failed to compile.

// ./src/index.js
// Module not found: Can't resolve 'react - redux' in ' / Users / silver / Work // / 2019REACT / 2019 - loftschool - React / 01 - loftschool - homeworks / // //// loftschool - homeworks / src'
