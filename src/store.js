import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import searchMiddleware from './middlewares/searchMiddleware';
import showMiddleware from './middlewares/showMiddleware';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(searchMiddleware),
    applyMiddleware(showMiddleware)
  )
);

const getStore = () => {
  return store;
};

export default getStore;
