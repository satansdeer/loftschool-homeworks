import rootReducer from "./reducers";
import { createStore, applyMiddleware, compose } from "redux";
import ordermiddleware from "./middleware/ordermiddleware";

const composeEnhancers =
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(ordermiddleware),
  // other store enhancers if any
);

export default () => {
  return createStore(
    rootReducer,
    enhancer
  );
};
