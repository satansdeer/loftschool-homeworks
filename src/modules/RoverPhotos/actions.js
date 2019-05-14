export const changeSol = sol => ({
  type: 'ROVER_PHOTOS/CHANGE_SOL',
  payload: sol
});

export const fetchPhotosRequest = (name, sol, apiKey) => ({
  type: 'ROVER_PHOTOS/FETCH_PHOTOS_REQUEST',
  payload: {apiKey, sol, name}
});

export const fetchPhotosSuccess = (photos, name, sol) => ({
  type: 'ROVER_PHOTOS/FETCH_PHOTOS_SUCCESS',
  payload: {name, photos, sol}
});

export const fetchPhotosFailure = error => ({
  type: 'ROVER_PHOTOS/FETCH_PHOTOS_FAILURE',
  payload: error
});
