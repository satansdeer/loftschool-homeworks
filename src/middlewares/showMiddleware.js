// Реализуйте showMiddleware

// Вам необходимо обработать showRequest
// После получения данных с сервера - диспачте showSuccess
// В случае ошибки showSuccess

// На забудьте вызвать метод next.
import { showRequest, showSuccess, showFailure } from '../actions';
import { show } from '../api';

const showMiddleware = store => next => async action => {
  let result = next(action);
  if (action.type === showRequest.toString()) {
    try {
      const res = await show(action.payload);
      store.dispatch(showSuccess(res));
    } catch (e) {
      store.dispatch(showFailure(e));
    }
  }
  return result;
};

export default showMiddleware;
