import { handleActions } from 'redux-actions';
import { addKey } from './actions';
import { combineReducers } from 'redux';

// Реализуйте редьюсер

const apiKey = handleActions({
    [addKey]: (state, action) => action.payload
}, '');

export default combineReducers({apiKey});