import { fetchPhotosRequest, fetchPhotosSuccess, fetchPhotosFailure, changeSol } from "./actions";

const initialState = {
  sol: {
    current: 1,
    min: 1,
    max: 100
  },
  photos: {
    curiosity: {},
    opportunity: {},
    spirit: {}
  }
};

export default (state = initialState, action) => {
  const { type, payload, rover } = action;
  switch (type) {
    case fetchPhotosRequest.toString():
      return {
        ...state,
        photos: {
          ...state.photos,
          [payload]: {
            isLoading: true,
            isLoaded: false,
            photos: []
          }
        }
      };
    case fetchPhotosSuccess.toString():
      return {
        ...state,
        photos: {
          ...state.photos,
          [rover]: {
            isLoading: false,
            isLoaded: true,
            photos: payload
          }
        }
      };
    case fetchPhotosFailure.toString():
      return {
        ...state,
        photos: {
          ...state.photos,
          [rover]: {
            isLoading: true,
            isLoaded: false,
            error: `${payload.status} - ${payload.statusText}`
          }
        }
      };

    case changeSol.toString():
      return {
        ...state,
        sol: {
          ...state.sol,
          current: payload
        }
      };
    default: {
      return state;
    }
  }
}