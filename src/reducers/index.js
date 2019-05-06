import { combineReducers } from 'redux';
import search from './search';
import shows from './shows';

// Вам необходимо реализовать search и shows редьюсеры.
// Создайте соответствующие файлы.

const rootReducer = combineReducers({
  search,
  shows
});

export default rootReducer;
