import myMiddleware from '../middleware';
import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './rootReducer';

const store = createStore(
  rootReducer,
  applyMiddleware(myMiddleware)

  ////for using without cypress, it cant compose this :(
  // compose(
  //   applyMiddleware(myMiddleware),
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // )
);

export default store;
