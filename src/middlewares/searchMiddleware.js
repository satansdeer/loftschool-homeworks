// Реализуйте searchMiddleware
// Обратите внимание на файл `searchMiddleware.test.js`

// Вам необходимо обработать searchRequest
// После получения данных с сервера - диспачте searchSuccess
// В случае ошибки searchFailure

// На забудьте вызвать метод next.
import {
    searchFailure,
    searchSuccess,
    searchRequest
} from '.././actions';
import { search } from '../api';
export default  store => next => action => {
    
  if (action.type === searchRequest.toString()) {
    search(action.payload)
      .then(series => {
        store.dispatch(searchSuccess(series));
      })
      .catch(error => {
        store.dispatch(searchFailure(error));
      });
  }
  return next(action);
};
