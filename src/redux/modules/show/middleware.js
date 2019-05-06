// Реализуйте showMiddleware

// Вам необходимо обработать showRequest
// После получения данных с сервера - диспачте showSuccess
// В случае ошибки showSuccess

// На забудьте вызвать метод next.
import { showFailure, showSuccess, showLoading } from './actions';
import { show } from '../../../api';

export const showMiddleware = showId => dispatch => {
  dispatch(showLoading());

  show(showId)
    .then(data => {
      console.log('get data of show', data);
      return data;
    })
    .then(({ name, summary, _embedded: { cast } }) =>
      dispatch(showSuccess({ name, summary, cast }))
    )
    .catch(
      error =>
        console.log('error in searchAction', error) || dispatch(showFailure())
    );
};
