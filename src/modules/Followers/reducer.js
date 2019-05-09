import { handleActions } from 'redux-actions';
import {
  fetchRequest,
  fetchSuccess,
  fetchFailure
} from './actions';

// Обратите внимание на тесты reducer.test.js
// Они помогут вам написать редьюсер

const user = handleActions(
    {
      [fetchRequest]: () => ({
        data: [],
        isLoading: true
      }),
  
      [fetchSuccess]: (state, action) => ({
        isLoading: false,
        data: action.payload
      }),
  
      [fetchFailure]: (state, action) => ({
        data: [],
        isLoading: false
      })
    },
    { data: [], isLoading: false }
  );
  
export default user;