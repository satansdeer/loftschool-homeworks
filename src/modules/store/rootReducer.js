import { combineReducers } from 'redux';
import authReducer from '../Auth/index';
import roverPhotosReducer from '../RoverPhotos/index';

export default combineReducers({ authReducer, roverPhotosReducer });
