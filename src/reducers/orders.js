import { CREATE_NEW_ORDER } from '../modules/clients';
import { MOVE_ORDER_NEXT, MOVE_ORDER_BACK } from '../actions/moveOrder';
import { ADD_INGREDIENT } from '../actions/ingredients';

const positionsArray = [
  'clients',
  'conveyor_1',
  'conveyor_2',
  'conveyor_3',
  'conveyor_4',
  'finish'
];

const positionNext = ({ position, ingredients, recipe }) => {
  let currPos = positionsArray.indexOf(position);
  if (position === 'clients') {
    return 'conveyor_1';
  }
  if (position !== 'conveyor_4') {
    return `conveyor_${currPos + 1}`;
  }
  if (position === 'conveyor_4' && ingredients.length === recipe.length) {
    return 'finish';
  }
  return position;
};

const positionBack = ({ position }) => {
  let currPos = positionsArray.indexOf(position);
  return currPos && currPos !== 1 ? `conveyor_${currPos - 1}` : position;
};

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_NEW_ORDER:
      return [
        ...state,
        {
          id: action.payload.id,
          ingredients: [],
          position: 'clients',
          recipe: action.payload.recipe
        }
      ];
    case MOVE_ORDER_NEXT:
      return state.map(order => {
        return order.id === action.payload
          ? { ...order, position: positionNext(order) }
          : order;
      });
    case MOVE_ORDER_BACK:
      return state.map(order => {
        return order.id === action.payload
          ? { ...order, position: positionBack(order) }
          : order;
      });
    case ADD_INGREDIENT:
      return state.map(order => {
        return !order.ingredients.includes(action.payload.ingredient) &&
          order.position === action.payload.from &&
          order.recipe.includes(action.payload.ingredient)
          ? {
              ...order,
              ingredients: [...order.ingredients, action.payload.ingredient]
            }
          : order;
      });
    default:
      return state;
  }
};

export const getOrdersFor = (state, position) =>
  state.orders.filter(order => order.position === position);
