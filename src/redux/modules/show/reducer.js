import { REQUEST, SUCCESS, FAILURE } from './constants';

const initialState = {
  show: {},
  showLoading: false
};

const showReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REQUEST:
      return { ...state, showLoading: true };

    case SUCCESS:
      return { ...state, show: payload, showLoading: false };

    case FAILURE:
      return { ...state, showLoading: false };

    default:
      return state;
  }
};

export default showReducer;
