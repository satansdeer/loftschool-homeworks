// Реализуйте searchMiddleware
// Обратите внимание на файл `searchMiddleware.test.js`

// Вам необходимо обработать searchRequest
// После получения данных с сервера - диспачте searchSuccess
// В случае ошибки searchFailure

// На забудьте вызвать метод next.
// import { searchRequest, requestSuccess } from "./actions";
// import { search } from "../api";

// export const searchMiddleware = store => next => action => {
//   if (action.type === searchRequest.toString()) {
//     search(action.payload).then(data => {
//       store.dispatch(requestSuccess(data));
//     });
//   }
//   return next(action);
// };

// export default searchMiddleware;

import { search } from 'api';
import { searchRequest, searchSuccess, searchFailure } from 'actions/search';

export default store => next => action => {
  if (action.type === searchRequest.toString()) {
    search(action.payload)
      .then(data => {
        store.dispatch(searchSuccess(data));
      })
      .catch(error => {
        store.dispatch(searchFailure(error));
      });
  }

  return next(action);
};
