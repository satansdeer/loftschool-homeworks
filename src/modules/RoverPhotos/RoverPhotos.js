// Реализуйте редьюсер
// Файл с тестами RoverPhotos.test.js поможет вам в этом
import {
  changeSol,
  fetchPhotosRequest,
  fetchPhotosSuccess,
  fetchPhotosFailure
} from './actions';
import { createSelector } from 'reselect';

const initialStateForRoversPhotos = ["curiosity", "opportunity", "spirit"];

const initialState = {
  sol: {
    current: 1,
    min: 1,
    max: 100
  },
  photos: initialStateForRoversPhotos,
  error: null
};

const solLens = ['sol', 'current'];
const errorLens = ['error'];

const roverPhotosReducer = (state = initialState, action) => {
  switch (action.type) {
    case changeSol:
      console.log(action.payload);
      console.log(state);
      return [];
      // set(solLens, action.payload, state);

    case fetchPhotosRequest:
      console.log(action.payload);
      console.log(state);
      return []
      // return set(
      //   lensPath(['photos', `${action.payload.name}`, `${action.payload.sol}`]),
      //   {isLoading: true, isLoaded: false, photos: []},
      //   state
      // );

    case fetchPhotosSuccess:
      console.log(action.payload);
      console.log(state);
      return []
      // return set(
      //   lensPath(['photos', `${action.payload.name}`, `${action.payload.sol}`]),
      //   {isLoading: true, isLoaded: false, photos: action.payload.photos},
      //   state
      // );

    case fetchPhotosFailure:
      return [errorLens, action.payload, state];

    default:
      return state;
  }
};

const solSelector = state => state.roverPhotosReducer.sol;
const photosSelector = state => state.roverPhotosReducer.photos;

export const getSol = createSelector(
  [solSelector],
  sol => sol
);

export const getRoverPhotos = createSelector(
  [photosSelector],
  photos => photos
);


export default roverPhotosReducer;
