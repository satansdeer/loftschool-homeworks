import {
  fetchShowsRequest,
  fetchShowsSuccess,
  fetchShowsFailure
} from '../actions';
import { show } from '../api';

// Реализуйте showMiddleware

// Вам необходимо обработать showRequest
// После получения данных с сервера - диспачте showSuccess
// В случае ошибки showSuccess

// На забудьте вызвать метод next.
const showsMiddleware = store => next => action => {
  if (action.type === fetchShowsRequest.toString()) {
    show(action.payload)
      .then(data => {
        store.dispatch(fetchShowsSuccess(data));
      })
      .catch(error => {
        store.dispatch(fetchShowsFailure(error.message));
      });
  }
  next(action);
};

export default showsMiddleware;
