import { REQUEST, SUCCESS, FAILURE } from '../../../constants';

const initialState = {
  data: {}
};

const showReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST:
      return state;

    case SUCCESS:
      return state;

    case FAILURE:
      return state;

    default:
      return state;
  }
};

export default showReducer;
