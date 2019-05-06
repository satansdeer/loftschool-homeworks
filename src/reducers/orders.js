import { CREATE_NEW_ORDER } from '../modules/clients';
import { MOVE_ORDER_NEXT, MOVE_ORDER_BACK } from '../actions/moveOrder';
import { ADD_INGREDIENT } from '../actions/ingredients';

// Реализуйте редьюсер
// Типы экшенов, которые вам нужно обрабатывать уже импортированы
// Обратите внимание на `orders.test.js`.
// Он поможет понять, какие значения должен возвращать редьюсер.

const POSITIONS_START = 'clients';
const POSITIONS_FINISH = 'finish';

const positions = [
  POSITIONS_START,
  'conveyor_1',
  'conveyor_2',
  'conveyor_3',
  'conveyor_4',
  POSITIONS_FINISH
];

const addIngredient = (state, action) => {
  const { from, ingredient } = action.payload;
  const newState = state.map(order => {
    const { position, ingredients, recipe } = order;

    if (position !== from || recipe.indexOf(ingredient) < 0) {
      return order;
    }

    ingredients.push(ingredient);
    return { ...order, ingredients };
  });

  return newState;
};

const isOrderCompleted = order => {
  const { recipe, ingredients } = order;
  let isOrderCompleted = true;
  recipe.forEach((receipeElement, index) => {
    if (ingredients.indexOf(receipeElement) < 0) {
      isOrderCompleted = false;
      return false;
    }
  });
  return isOrderCompleted;
};

const movePosition = (state, action, direction) => {
  const newState = state.map(order => {
    if (order.id !== action.payload) {
      return order;
    }

    const positionIndex = positions.indexOf(order.position);
    const newPositionIndex = positionIndex + direction;

    if (newPositionIndex < 0 || newPositionIndex > positions.length) {
      return order;
    }

    const newPosition = positions[newPositionIndex];

    if (newPosition === POSITIONS_START) {
      return order;
    }

    if (newPosition === POSITIONS_FINISH && !isOrderCompleted(order)) {
      return order;
    }

    return { ...order, position: newPosition };
  });

  return newState;
};

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_NEW_ORDER:
      const item = {
        ...action.payload,
        ingredients: [],
        position: POSITIONS_START
      };
      return [...state, item];
    case MOVE_ORDER_NEXT:
      return movePosition(state, action, 1);
    case MOVE_ORDER_BACK:
      return movePosition(state, action, -1);
    case ADD_INGREDIENT:
      return addIngredient(state, action);
    default:
      return state;
  }
};

export const getOrdersFor = (state, position) =>
  state.orders.filter(order => order.position === position);
