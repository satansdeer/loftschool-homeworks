import { CREATE_NEW_ORDER } from '../modules/clients';
import { MOVE_ORDER_NEXT, MOVE_ORDER_BACK } from '../actions/moveOrder';
import { ADD_INGREDIENT } from '../actions/ingredients';

// Реализуйте редьюсер
// Типы экшенов, которые вам нужно обрабатывать уже импортированы
// Обратите внимание на `orders.test.js`.
// Он поможет понять, какие значения должен возвращать редьюсер
const getPosition = ({ position }) => {
  return +position.substring(position.length - 1);
};
const nextPosition = ({ position, ingredients, recipe }) => {
  if (position === 'clients') {
    return 'conveyor_1';
  } else if (position !== 'conveyor_4') {
    return `conveyor_${getPosition({ position }) + 1}`;
  } else if (
    position === 'conveyor_4' &&
    ingredients.length === recipe.length
  ) {
    return 'finish';
  } else {
    return position;
  }
};
const backPosition = ({ position }) => {
  if (getPosition({ position }) > 1) {
    return `conveyor_${getPosition({ position }) - 1}`;
  } else {
    return position;
  }
};

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_NEW_ORDER:
      return [
        ...state,
        {
          id: action.payload.id,
          recipe: action.payload.recipe,
          ingredients: [],
          position: 'clients'
        }
      ];
    case MOVE_ORDER_NEXT:
      return state.map(item => {
        if (item.id === action.payload) {
          return {
            ...item,
            position: nextPosition(item)
          };
        } else {
          return item;
        }
      });
    case MOVE_ORDER_BACK:
      return state.map(item => {
        if (item.id === action.payload) {
          return {
            ...item,
            position: backPosition(item)
          };
        } else {
          return item;
        }
      });
    case ADD_INGREDIENT:
      return state.map(item => {
        if (
          item.position === action.payload.from &&
          item.recipe.includes(action.payload.ingredient) &&
          !item.ingredients.includes(action.payload.ingredient)
        ) {
          return {
            ...item,
            ingredients: [...item.ingredients, action.payload.ingredient]
          };
        }
      });
    default:
      return state;
  }
};

export const getOrdersFor = (state, position) =>
  state.orders.filter(order => order.position === position);
