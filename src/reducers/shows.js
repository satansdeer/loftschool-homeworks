import { handleActions } from "redux-actions";
import { showRequest, showRequestSuccess } from "../middlewares/actions";

const shows = handleActions({
  [showRequest]: () => [],
  [showRequestSuccess]: (_state, action) => action.payload
}, null);

export default shows;