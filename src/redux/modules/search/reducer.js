import { REQUEST, SUCCESS, FAILURE } from '../../../constants';

const initialState = {
  data: [],
  isLoading: false
};

const searchReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REQUEST:
      return { ...state, isLoading: true };

    case SUCCESS:
      return { ...state, data: payload, isLoading: false };

    case FAILURE:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};

export default searchReducer;
