import { CREATE_NEW_ORDER } from "../modules/clients";
import { MOVE_ORDER_NEXT, MOVE_ORDER_BACK } from "../actions/moveOrder";
import { ADD_INGREDIENT } from "../actions/ingredients";
export default (state = [], action) => {
  const { payload } = action;
  switch (action.type) {
    case CREATE_NEW_ORDER:
      console.log(state);
      return [
        ...state,
        {
          ...action.payload,
          ingredients: [],
          position: "clients"
        }
      ];
    case MOVE_ORDER_NEXT:
      console.log(payload);
      return state.filter(el => {
        if (+el.id === +payload) {
          el.position = "conveyor_1";
        }
        return el;
      });
    case MOVE_ORDER_BACK:
      console.log(state);
      return [...state, { ...action.payload }];
    case ADD_INGREDIENT:
      console.log(action);
      return [...state];
    default:
      return state;
  }
};

export const getOrdersFor = (state, position) =>
  state.orders.filter(order => order.position === position);