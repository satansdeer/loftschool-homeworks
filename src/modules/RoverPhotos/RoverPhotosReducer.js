// Реализуйте редьюсер
// Файл с тестами RoverPhotos.test.js поможет вам в этом
import {
  changeSol,
  fetchPhotosRequest,
  fetchPhotosSuccess,
  fetchPhotosFailure
} from './actions';
import {createSelector} from 'reselect';
import {set, lensPath} from "ramda";
const initialRoverPhotos = {curiosity:[], opportunity: [], spirit:[]};

const initValues = {
  sol: {
    current: 1,
    min: 1,
    max: 100
  },
  photos: initialRoverPhotos,
  error: null
};

const sols = ['sol', 'current'];

const roverPhotosReducer = (state = initValues, action) => {
  console.log(action.type);
  switch (action.type) {
    case changeSol:
      return set(sols, action.payload, state);
    case fetchPhotosRequest:
      console.log('request');
      return set(
        lensPath(['photos', `${action.payload.name}`, `${action.payload.sol}`]),
        {isLoading: true, isLoaded: false, photos: []},
        state
      );
    case fetchPhotosSuccess:
      console.log('Photos', action.payload);
      return set(
        lensPath(['photos', `${action.payload.name}`, `${action.payload.sol}`]),
        {isLoading: true, isLoaded: false, photos: action.payload.photos},
        state
      );
    case fetchPhotosFailure:
      return [...action.payload.photos];
    default:
      return state;
  }
};

const solSelector = state => {
  return state.roverPhotosReducer.sol;
}

const photosSelector = state => {
  console.log('StateFromSelector', state);
  return state.roverPhotosReducer.photos;
}

export const getSol = createSelector(
  [solSelector],
  sol => sol
);

export const getRoverPhotos = createSelector(
  [photosSelector],
  photos => photos
);


export default roverPhotosReducer;
