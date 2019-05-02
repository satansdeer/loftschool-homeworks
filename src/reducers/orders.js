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
      return [
        ...state,
        {
          id: action.payload.id,
          recipe: action.payload.recipe,
          ingredients: [],
          position: 'clients'
        }
      ];
    }

    case MOVE_ORDER_NEXT: {
      const currentOrder = {
        ...state.find(order => order.id === action.payload)
      };
      const currentPosition = currentOrder.position;

      if (currentPosition === 'clients') {
        currentOrder.position = 'conveyor_1';
      } else if (currentPosition === 'conveyor_4') {
        if (currentOrder.ingredients.length === currentOrder.recipe.length) {
          currentOrder.position = 'finish';
        } else {
          return state;
        }
      } else if (currentPosition !== 'finish') {
        currentOrder.position = `conveyor_${parseInt(
          currentPosition.slice(-1),
          10
        ) + 1}`;
      } else {
        return state;
      }

      return state.map(order =>
        order.id === action.payload ? currentOrder : order
      );
    }

    case MOVE_ORDER_BACK: {
      const currentOrder = {
        ...state.find(order => order.id === action.payload)
      };
      const currentPosition = currentOrder.position;

      if (
        currentPosition === 'clients' ||
        currentPosition === 'finish' ||
        currentPosition === 'conveyor_1'
      ) {
        return state;
      } else {
        currentOrder.position = `conveyor_${parseInt(
          currentPosition.slice(-1),
          10
        ) - 1}`;
      }

      return state.map(order =>
        order.id === action.payload ? currentOrder : order
      );
    }

    case ADD_INGREDIENT: {
      const { ingredient, from } = action.payload;
      const currentOrder = state.find(order => order.position === from);

      if (
        !currentOrder ||
        !currentOrder.recipe.includes(ingredient) ||
        currentOrder.ingredients.includes(ingredient)
      ) {
        return state;
      }

      return state.map(order => {
        if (order.id === currentOrder.id) {
          return {
            ...order,
            ingredients: [...order.ingredients, ingredient]
          };
        } else {
          return order;
        }
      });
    }

    default:
      return state;
  }
};

export const getOrdersFor = (state, position) =>
  state.orders.filter(order => order.position === position);
