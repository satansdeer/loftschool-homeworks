import { CREATE_NEW_ORDER } from '../modules/clients';
import { MOVE_ORDER_NEXT, MOVE_ORDER_BACK } from '../actions/moveOrder';
import { ADD_INGREDIENT } from '../actions/ingredients';

// Реализуйте редьюсер
// Типы экшенов, которые вам нужно обрабатывать уже импортированы
// Обратите внимание на `orders.test.js`.
// Он поможет понять, какие значения должен возвращать редьюсер.

const POSTION_START = 'clients';
const POSTION_FINISH = 'finish';

const listPosition = [
  POSTION_START,
  'conveyor_1',
  'conveyor_2',
  'conveyor_3',
  'conveyor_4',
  POSTION_FINISH
];

/**
 * Проверяем наличия всех ингридиентов
 * @param {*} order
 */
const isOrderCompleted = order => {
  debugger;
  const { recipe, ingredients } = order;
  let result = true;

  for (var i=0, len = recipe.length; i < len; i++) {
    if (ingredients.indexOf(recipe[i]) === -1) {
      result = false;
      break;
    }
  }

  return result;
};

/**
 * Двигаем заказа по списку ингридиентов
 * @param {*} state
 * @param {*} action
 * @param {*} direction Направление движения: +1 вперед, -1 назад
 */
const moveOrder = (state, action, direction) => {
  const updateState = state.map(order => {
    if (order.id !== action.payload) {
      return order;
    }

    let indexPosition = listPosition.indexOf(order.position);
    const newIndexPostion = indexPosition + direction;
    const newPosition = listPosition[newIndexPostion];

    if (newPosition === POSTION_START) {
      return order;
    }

    if (newPosition === POSTION_FINISH && !isOrderCompleted(order)) {
      return order;
    }

    return { ...order, position: newPosition };
  });

  return updateState;
};

/**
 * Добавить ингридиент
 * @param {*} state
 * @param {*} action
 */
const addIngredient = (state, action) => {
  const { from, ingredient } = action.payload;

  const updateState = state.map(order => {
    const { position, ingredients, recipe } = order;

    if (position !== from || !recipe.includes(ingredient)) {
      return order;
    }

    ingredients.push(ingredient);
    return { ...order, ingredients };
  });

  return updateState;
};

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_NEW_ORDER:
      const item = {
        ...action.payload,
        ingredients: [],
        position: POSTION_START
      };
      return [...state, item];
    case MOVE_ORDER_NEXT:
      return moveOrder(state, action, +1);
    case MOVE_ORDER_BACK:
      return moveOrder(state, action, -1);
    case ADD_INGREDIENT:
      return addIngredient(state, action);
    default:
      return state;
  }
};

export const getOrdersFor = (state, position) =>
  state.orders.filter(order => order.position === position);
