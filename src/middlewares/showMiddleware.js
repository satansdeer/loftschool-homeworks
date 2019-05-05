import { show } from '../api.js';
import { showRequest, showSuccess, showFailure } from '../actions';

const showMiddleware = store => next => action => {
  if (action.type === showRequest.toString()) {
    show(action.payload).then(
      show => {
        store.dispatch(showSuccess(show));
      },
      error => {
        store.dispatch(showFailure(error));
      }
    );
  }
  return next(action);
};

export default showMiddleware;

// Реализуйте showMiddleware

// Вам необходимо обработать showRequest
// После получения данных с сервера - диспачте showSuccess
// В случае ошибки showSuccess

// На забудьте вызвать метод next.
