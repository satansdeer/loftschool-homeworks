import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import createAppStore from './modules/store/store';
import { Provider } from 'react-redux';
import App from './components/App';

const store = createAppStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
