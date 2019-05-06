import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './rootReducer';
import { searchMiddleware } from '../modules/search/middleware';
import { showMiddleware } from '../modules/show/middleware';

const createAppStore = () => {
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

  return store;
};

export default createAppStore;
