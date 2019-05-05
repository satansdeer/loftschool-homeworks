// Реализуйте showMiddleware

// Вам необходимо обработать showRequest
// После получения данных с сервера - диспачте showSuccess
// В случае ошибки showSuccess

// На забудьте вызвать метод next.
// import {showFailure,showSuccess}
// import { show } from '../../../api';

// const showMiddleware = showId => dispatch => {
//   show(showId)
//     .then(data => dispatch(showSuccess(data)))
//     .catch(
//       error =>
//         console.log('error in searchAction', error) || dispatch(showFailure())
//     );
// };

// export default showMiddleware;
