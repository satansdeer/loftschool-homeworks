import { show } from '../../../api';
import { showRequest, showSuccess, showFailure } from './actions';

export const showMiddleware = store => next => action => {
  if (action.type === showRequest.toString()) {
    show(action.payload)
      .then(data => {
        store.dispatch(showSuccess(data));
      })
      .catch(() => store.dispatch(showFailure()));
  }

  return next(action);
};
