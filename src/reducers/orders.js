import { CREATE_NEW_ORDER } from '../modules/clients';
import { MOVE_ORDER_NEXT, MOVE_ORDER_BACK } from '../actions/moveOrder';
import { ADD_INGREDIENT } from '../actions/ingredients';

// Реализуйте редьюсер
// Типы экшенов, которые вам нужно обрабатывать уже импортированы
// Обратите внимание на `orders.test.js`.
// Он поможет понять, какие значения должен возвращать редьюсер.

const returnNextPos = ({ position, ingredients, recipe }) => {
  if (position === 'clients') {
    return 'conveyor_1';
  } else if (position !== 'conveyor_4') {
    return getConveyorNumber(position, 'next');
  } else if (ingredients.length === recipe.length) {
    return 'finish';
  } else {
    return position;
  }
};
const returnBackPos = ({ position }) => {
  if (position !== 'conveyor_1') {
    return getConveyorNumber(position, 'back');
  } else {
    return position;
  }
};

const getConveyorNumber = (position, direction) => {
  if (direction === 'next') {
    return `conveyor_${Number(position.substr(position.length - 1, 1)) + 1}`;
  } else {
    return `conveyor_${Number(position.substr(position.length - 1, 1)) - 1}`;
  }
};

export default (state = [], action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      return state.map(el => {
        if (
          el.position === action.payload.from &&
          !el.ingredients.includes(action.payload.ingredient) &&
          el.recipe.includes(action.payload.ingredient)
        ) {
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
            position: returnNextPos(el)
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

export const getOrdersFor = (state, position) =>
  state.orders.filter(order => order.position === position);
