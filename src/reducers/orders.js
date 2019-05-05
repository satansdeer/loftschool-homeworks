import { CREATE_NEW_ORDER } from '../modules/clients';
import { MOVE_ORDER_NEXT, MOVE_ORDER_BACK } from '../actions/moveOrder';
import { ADD_INGREDIENT } from '../actions/ingredients';

// Реализуйте редьюсер
// Типы экшенов, которые вам нужно обрабатывать уже импортированы
// Обратите внимание на `orders.test.js`.
// Он поможет понять, какие значения должен возвращать редьюсер.

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_NEW_ORDER: {
      const { id, recipe } = action.payload;
      return [...state, { id, recipe, position: 'clients', ingredients: [] }];
    }
    case MOVE_ORDER_NEXT: {
      const { id } = action.payload;
      return state.map(order => {
        return order.id === id
          ? { ...order, position: getNextPosition(order) }
          : order;
      });
    }
    case MOVE_ORDER_BACK: {
      const { id } = action.payload;
      return state.map(order => {
        return order.id === id
          ? { ...order, position: getBackPosition(order) }
          : order;
      });
    }
    case ADD_INGREDIENT: {
      const { from, ingredient } = action.payload;
      return state.map(order => {
        return order.position === from &&
          order.recipe.includes(ingredient) &&
          !order.ingredients.includes(ingredient)
          ? { ...order, ingredients: [...order.ingredients, ingredient] }
          : order;
      });
    }
    default:
      return state;
  }
};

function getNextPosition(order) {
  if (order.position === 'clients') {
    return 'conveyor_1';
  }
  if (
    order.position === 'conveyor_4' &&
    order.ingredients.length === order.recipe.length
  ) {
    return 'finish';
  }
  if (order.position !== 'conveyor_4') {
    return `conveyor_${getPositionNumber(order) + 1}`;
  } else {
    return order.position;
  }
}
function getBackPosition(order) {
  if (getPositionNumber(order) > 1) {
    return `conveyor_${getPositionNumber(order) - 1}`;
  } else {
    return order.position;
  }
}
function getPositionNumber(order) {
  var position = order.position.substring(order.position.length - 1);
  return position;
}
export const getOrdersFor = (state, position) =>
  state.orders.filter(order => order.position === position);
