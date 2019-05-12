import { createStore, compose, applyMiddleware } from "redux";
import rootReducers from "./reducers/index";
import searchMiddleware from './middlewares/searchMiddleware'
import showMiddleware from "./middlewares/showMiddleware";

const getStore = () => {
  const store = createStore(rootReducers, {},
    compose(
      applyMiddleware(searchMiddleware),
      applyMiddleware(showMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : noop => noop())
    );
  return store;
};

export default getStore;