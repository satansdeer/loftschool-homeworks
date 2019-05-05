// Реализуйте showMiddleware

// Вам необходимо обработать showRequest
// После получения данных с сервера - диспачте showSuccess
// В случае ошибки showSuccess

// На забудьте вызвать метод next.

import { show } from "../api";
import { showRequest, showRequestSuccess } from "./actions";

export const showMiddleware = store => next => action => {
  if (action.type === showRequest.toString()) {
    console.log('RequestStarted');
    show(action.payload).then(data => {
      console.log(data);
      store.dispatch(showRequestSuccess(data));
    });
  }
  return next(action);
};

export default showMiddleware;