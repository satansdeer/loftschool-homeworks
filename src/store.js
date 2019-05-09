import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSaga } from './modules';

// Создайте sagaMiddleware
export const sagaMiddleware = createSagaMiddleware(rootSaga);

const createAppStore = () => {
  return createStore(
    rootReducer,
    compose(
      applyMiddleware(sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : noop => noop
    )
  );

  // Подключите корневой редьюсер
  // Скорее всего вы захотите подключить Redux DevTools
  // Не забудьте подключить sagaMiddleware
};

export default createAppStore;
