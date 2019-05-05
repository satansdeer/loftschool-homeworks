import { search } from '../api.js';
import { searchRequest, searchSuccess, searchFailure } from '../actions';

const searchMiddleware = store => next => action => {
  if (action.type === searchRequest.toString()) {
    search(action.payload).then(
      data => {
        store.dispatch(searchSuccess(data));
      },
      error => {
        store.dispatch(searchFailure(error));
      }
    );
  }
  return next(action);
};

export default searchMiddleware;

// Реализуйте searchMiddleware
// Обратите внимание на файл `searchMiddleware.test.js`

// Вам необходимо обработать searchRequest
// После получения данных с сервера - диспачте searchSuccess
// В случае ошибки searchFailure

// На забудьте вызвать метод next.
