// Реализуйте searchMiddleware
// Обратите внимание на файл `searchMiddleware.test.js`

// Вам необходимо обработать searchRequest
// После получения данных с сервера - диспачте searchSuccess
// В случае ошибки searchFailure

// На забудьте вызвать метод next.
import { searchRequest, searchSuccess, searchFailure } from '../actions';
import { search } from '../api';

const searchMiddleware = store => next => async action => {
  const result = next(action);
  if (action.type === searchRequest.toString()) {
    try {
      const res = await search(action.payload);
      store.dispatch(searchSuccess(res));
    } catch (e) {
      store.dispatch(searchFailure(e));
    }
  }
  return result;
};

export default searchMiddleware;
