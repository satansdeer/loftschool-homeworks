import { CREATE_NEW_ORDER } from '../modules/clients';
import { MOVE_ORDER_NEXT, MOVE_ORDER_BACK } from '../actions/moveOrder';
import { ADD_INGREDIENT } from '../actions/ingredients';

// Реализуйте редьюсер
// Типы экшенов, которые вам нужно обрабатывать уже импортированы
// Обратите внимание на `orders.test.js`.
// Он поможет понять, какие значения должен возвращать редьюсер

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
      const curOrder = {
        ...state.find(order => order.id === action.payload)
      };
      const curPosition = curOrder.position;
      const isClients = curPosition === 'clients';
      const isLastConveyor = curPosition === 'conveyor_4';
      const isFinish = curOrder.ingredients.length === curOrder.recipe.length;
      const notFinish = curPosition !== 'finish';

      if (isClients) {
        curOrder.position = 'conveyor_1';
      } else if (isLastConveyor) {
        if (isFinish) {
          curOrder.position = 'finish';
        } else {
          return state;
        }
      } else if (notFinish) {
        curOrder.position = `conveyor_${Number(curPosition.slice(-1)) + 1}`;
      } else {
        return state;
      }

      return state.map(order =>
        order.id === action.payload ? curOrder : order
      );
    }

    case MOVE_ORDER_BACK: {
      const curOrder = {
        ...state.find(order => order.id === action.payload)
      };
      const curPosition = curOrder.position;

      if (
        curPosition === 'clients' ||
        curPosition === 'finish' ||
        curPosition === 'conveyor_1'
      ) {
        return state;
      } else {
        curOrder.position = `conveyor_${Number(curPosition.slice(-1)) - 1}`;
      }

      return state.map(order =>
        order.id === action.payload ? curOrder : order
      );
    }

    case ADD_INGREDIENT: {
      const { ingredient, from } = action.payload;
      const curOrder = state.find(order => order.position === from);

      if (
        !curOrder ||
        !curOrder.recipe.includes(ingredient) ||
        curOrder.ingredients.includes(ingredient)
      ) {
        return state;
      }

      return state.map(order => {
        if (order.id === curOrder.id) {
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
