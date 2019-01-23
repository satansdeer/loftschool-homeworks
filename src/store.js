import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer, { rootSaga } from "./modules";

const sagaMiddleWare = createSagaMiddleware();

const composeEnhancers =
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleWare)
);

const store = createStore(rootReducer, enhancer);
sagaMiddleWare.run(rootSaga);

export default store;
