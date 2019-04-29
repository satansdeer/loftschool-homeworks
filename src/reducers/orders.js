import { CREATE_NEW_ORDER } from '../modules/clients';
import { MOVE_ORDER_NEXT, MOVE_ORDER_BACK } from '../actions/moveOrder';
import { ADD_INGREDIENT } from '../actions/ingredients';

// Реализуйте редьюсер
// Типы экшенов, которые вам нужно обрабатывать уже импортированы
// Обратите внимание на `orders.test.js`.
// Он поможет понять, какие значения должен возвращать редьюсер.
export default (state = [], { type, payload }) => {
  switch (type) {
    case CREATE_NEW_ORDER:
      const { id, recipe } = payload;
      return [
        ...state,
        {
          id: id,
          recipe: recipe,
          ingredients: [],
          position: 'clients'
        }
      ];
    case MOVE_ORDER_NEXT:
      return state.map(el => {
        if (el.id !== payload) {
          return el;
        }
        switch (el.position) {
          case 'clients':
            return { ...el, position: 'conveyor_1' };
          case 'conveyor_1':
            return { ...el, position: 'conveyor_2' };
          case 'conveyor_2':
            return { ...el, position: 'conveyor_3' };
          case 'conveyor_3':
            return { ...el, position: 'conveyor_4' };
          case 'conveyor_4':
            return el.recipe.every(it => el.ingredients.includes(it))
              ? { ...el, position: 'finish' }
              : el;
          default:
            return el;
        }
      });
    case MOVE_ORDER_BACK:
      return state.map(el => {
        if (el.id !== payload) {
          return el;
        }
        switch (el.position) {
          case 'clients':
            return { ...el, position: 'conveyor_1' };
          case 'conveyor_2':
            return { ...el, position: 'conveyor_1' };
          case 'conveyor_3':
            return { ...el, position: 'conveyor_2' };
          case 'conveyor_4':
            return { ...el, position: 'conveyor_3' };
          default:
            return el;
        }
      });
    case ADD_INGREDIENT:
      return state.map(el => {
        const { from, ingredient } = payload;

        if (el.position !== from) {
          return el;
        }

        return el.recipe.includes(ingredient) &&
          !el.ingredients.includes(ingredient)
          ? {
              ...el,
              ingredients: [...el.ingredients, ingredient]
            }
          : el;
      });
    default:
      return state;
  }
};

export const getOrdersFor = (state, position) =>
  state.orders.filter(order => order.position === position);
