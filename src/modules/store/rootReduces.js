import { combineReducers } from 'redux';
import authReducer from '../Auth/auth';
import roverPhotosReducer from '../RoverPhotos';

export default combineReducers({ authReducer, roverPhotosReducer });
