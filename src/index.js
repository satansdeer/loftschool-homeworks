import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import createStore from './modules/store/store';
import { Provider } from 'react-redux';
import App from './components/App';

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <App>
    </App>
  </Provider>,
  document.getElementById('root')
);
