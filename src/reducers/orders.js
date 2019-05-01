import { CREATE_NEW_ORDER } from '../modules/clients';
import { MOVE_ORDER_NEXT, MOVE_ORDER_BACK } from '../actions/moveOrder';
import { ADD_INGREDIENT } from '../actions/ingredients';

// Реализуйте редьюсер
// Типы экшенов, которые вам нужно обрабатывать уже импортированы
// Обратите внимание на `orders.test.js`.
// Он поможет понять, какие значения должен возвращать редьюсер.

const returnNextPos = ({ position, ingredients, recipe }) => {
  if (position !== 'clients' && position !== 'conveyor_4') {
    return `conveyor_${Number(position.substr(position.length - 1, 1)) + 1}`;
  } else if (ingredients.length === recipe.length) {
    return 'finish';
  } else {
    return position;
  }
};
const returnBackPos = ({ position }) => {
  if (position !== 'conveyor_1') {
    return `conveyor_${Number(position.substr(position.length - 1, 1)) - 1}`;
  } else {
    return position;
  }
};

export default (state = [], action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      return state.map(el => {
        if (el.position === action.payload.from) {
          return {
            ...el,
            ingredients: [...el.ingredients, action.payload.ingredient]
          };
        } else {
          return el;
        }
      });
    case MOVE_ORDER_NEXT:
      return state.map(el => {
        if (el.id === action.payload) {
          return {
            ...el,
            position:
              el.position === 'clients' ? `conveyor_${1}` : returnNextPos(el)
          };
        } else {
          return el;
        }
      });
    case MOVE_ORDER_BACK:
      return state.map(el => {
        if (el.id === action.payload) {
          return {
            ...el,
            position: returnBackPos(el)
          };
        } else {
          return el;
        }
      });
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
    default:
      return state;
  }
};

export const getOrdersFor = (state, position) => {
  return state.orders.filter(order => order.position === position);
};
