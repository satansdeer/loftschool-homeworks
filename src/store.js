import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import searchMiddleware from './middlewares/searchMiddleware';
import showMiddleware from './middlewares/showMiddleware';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(searchMiddleware),
    applyMiddleware(showMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : noop => noop
  )
);

const getStore = () => {
  return store;
};

export default getStore;
