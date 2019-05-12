import { combineReducers } from 'redux';
import authReducer from '../modules/Auth';
import roverPhotosReducer from '../modules/RoverPhotos';

export default combineReducers({ authReducer, roverPhotosReducer });
