import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './redux/store/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import MainWrapper from './components/globalPackage/MainWrapper/MainWrapper';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <MainWrapper />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
