import { CREATE_NEW_ORDER } from '../modules/clients';
import { MOVE_ORDER_NEXT, MOVE_ORDER_BACK } from '../actions/moveOrder';
import { ADD_INGREDIENT } from '../actions/ingredients';

// Реализуйте редьюсер
// Типы экшенов, которые вам нужно обрабатывать уже импортированы
// Обратите внимание на `orders.test.js`.
// Он поможет понять, какие значения должен возвращать редьюсер.

const MAX_INGREDIENTS_QUANTITY = 4;

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_NEW_ORDER: {
      const { id, recipe } = action.payload;
      const newOrder = {
        id,
        recipe,
        ingredients: [],
        position: 'clients'
      };

      return [...state, newOrder];
    }

    case MOVE_ORDER_NEXT: {
      const currOrderId = action.payload;
      const currOrder = { ...state.find(order => order.id === currOrderId) };
      const currPosition = currOrder.position;

      if (currPosition === 'clients') {
        currOrder.position = 'conveyor_1';
      } else if (currPosition === 'conveyor_4') {
        if (currOrder.ingredients.length === MAX_INGREDIENTS_QUANTITY) {
          currOrder.position = 'finish';
        } else {
          return state;
        }
      } else if (currPosition !== 'finish') {
        const conveyorNum = parseInt(currPosition.slice(-1), 10);
        currOrder.position = `conveyor_${conveyorNum + 1}`;
      } else {
        return state;
      }

      return state.map(order => (order.id === currOrderId ? currOrder : order));
    }

    case MOVE_ORDER_BACK: {
      const currOrderId = action.payload;
      const currOrder = { ...state.find(order => order.id === currOrderId) };
      const currPosition = currOrder.position;

      if (
        currPosition === 'clients' ||
        currPosition === 'finish' ||
        currPosition === 'conveyor_1'
      ) {
        return state;
      } else {
        const conveyorNum = parseInt(currPosition.slice(-1), 10);
        currOrder.position = `conveyor_${conveyorNum - 1}`;
      }

      return state.map(order => (order.id === currOrderId ? currOrder : order));
    }

    case ADD_INGREDIENT: {
      const { from, ingredient } = action.payload;
      const currOrder = { ...state.find(order => order.position === from) };

      if (currOrder.ingredients.length >= MAX_INGREDIENTS_QUANTITY) {
        return state;
      }

      currOrder.ingredients.push(ingredient);

      return state.map(
        order => (order.id === currOrder.id ? currOrder : order)
      );
    }

    default:
      return state;
  }
};

export const getOrdersFor = (state, position) =>
  state.orders.filter(order => order.position === position);
