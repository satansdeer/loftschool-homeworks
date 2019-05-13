// Реализуйте редьюсер
// Файл с тестами RoverPhotos.test.js поможет вам в этом
import {
  changeSol,
  fetchPhotosRequest,
  fetchPhotosSuccess,
  fetchPhotosFailure
} from './actions';
import {set, lensPath} from 'ramda';

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
      return set(solLens, action.payload, state);

    case fetchPhotosRequest:
      return set(
        lensPath(['photos', `${action.payload.name}`, `${action.payload.sol}`]),
        {isLoading: true, isLoaded: false, photos: []},
        state
      );

    case fetchPhotosSuccess:
      return set(
        lensPath(['photos', `${action.payload.name}`, `${action.payload.sol}`]),
        {isLoading: true, isLoaded: false, photos: action.payload.photos},
        state
      );

    case fetchPhotosFailure:
      return set(errorLens, action.payload, state);

    default:
      return state;
  }
};

export default roverPhotosReducer;
