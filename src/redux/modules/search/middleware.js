import { search } from '../../../api';
import { searchSuccess, searchFailure, searchLoading } from './actions';

export const searchMiddleware = query => dispatch => {
  console.log('check');
  dispatch(searchLoading());

  search(query)
    .then(data => {
      console.log('get data', data);
      return data;
    })
    .then(data => dispatch(searchSuccess(data)))
    .catch(
      error =>
        console.log('error in searchAction', error) || dispatch(searchFailure())
    );
};
