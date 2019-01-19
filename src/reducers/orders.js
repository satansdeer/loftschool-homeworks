import { CREATE_NEW_ORDER } from "../modules/clients";
import { MOVE_ORDER_NEXT, MOVE_ORDER_BACK } from "../actions/moveOrder";
import { ADD_INGREDIENT } from "../actions/ingredients";
import { clients } from "../mapsConveyor";

export default (state = [], action) => {
  const { payload, type } = action;
  switch (type) {
    case CREATE_NEW_ORDER:
      return [
        ...state,
        {
          recipe: payload.recipe,
          id: payload.id,
          ingredients: [],
          position: clients
        }
      ];
    case MOVE_ORDER_NEXT:
      return payload.orders;
    case MOVE_ORDER_BACK:
      return payload.orders;
    case ADD_INGREDIENT:
      return payload.orders;
    default:
      return state;
  }
};

export const getOrdersFor = (state, position) =>
  state.orders.filter(order => order.position === position);