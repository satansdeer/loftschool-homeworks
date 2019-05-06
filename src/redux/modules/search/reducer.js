import { REQUEST, SUCCESS, FAILURE } from './constants';

const initialState = {
  data: [],
  searchLoading: false
};

const searchReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REQUEST:
      return { ...state, searchLoading: true };

    case SUCCESS:
      return { ...state, data: payload, searchLoading: false };

    case FAILURE:
      return { ...state, searchLoading: false };

    default:
      return state;
  }
};

export default searchReducer;
