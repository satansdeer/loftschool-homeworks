import { handleActions } from 'redux-actions';
import { searchRequest, requestSuccess } from "../middlewares/actions";


const search = handleActions({
  [searchRequest]: () => [],
  [requestSuccess]: (_state, action) => action.payload
},[]);

export default search;