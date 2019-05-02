// Реализуйте showMiddleware

// Вам необходимо обработать showRequest
// После получения данных с сервера - диспачте showSuccess
// В случае ошибки showSuccess

// На забудьте вызвать метод next.

import {
  showFailure,
  showSuccess,
  showRequest
} from '.././actions';
import { show } from '../api';

export const showMiddleware = store => next => action => {
    
  if (action.type === showRequest.toString()) {
    show(action.payload)
      .then(series => {
        store.dispatch(showSuccess(series));
      })
      .catch(error => {
        store.dispatch(showFailure(error));
      });
  }
  return next(action);
};
