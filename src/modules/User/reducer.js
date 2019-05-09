import { handleActions } from 'redux-actions';

// Обратите внимание на тесты, они помогут вам написать код редьюсера
import {
  fetchRequest,
  fetchSuccess,
  fetchFailure
} from './actions';

const user = handleActions(
    {
      [fetchRequest]: () => ({
        data: {},
        isLoading: true
      }),
  
      [fetchSuccess]: (state, action) => ({
        isLoading: false,
        data: action.payload
      }),
  
      [fetchFailure]: (state, action) => ({
        data: {},
        isLoading: false
      })
    },
    { data: {}, isLoading: false }
  );
  
export default user;
