import { CREATE_NEW_ORDER } from '../modules/clients';
import { MOVE_ORDER_NEXT, MOVE_ORDER_BACK } from '../actions/moveOrder';
import { ADD_INGREDIENT } from '../actions/ingredients';

// Реализуйте редьюсер
// Типы экшенов, которые вам нужно обрабатывать уже импортированы
// Обратите внимание на `orders.test.js`.
// Он поможет понять, какие значения должен возвращать редьюсер.

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_NEW_ORDER.toString():
      return state.concat([
        {
          id: action.payload.id,
          recipe: action.payload.recipe,
          ingredients: [],
          position: 'clients'
        }
      ]);
    case MOVE_ORDER_NEXT.toString():
      return movePizza(state, action);
    case MOVE_ORDER_BACK.toString():
      return movePizza(state, action);
    case ADD_INGREDIENT.toString():
      return addIngrigientToPizza(state, action);
    default:
      return state;
  }
};

export const getOrdersFor = (state, position) => {
  // console.log(state.orders.filter(order => order.position === 'finish'));
  return state.orders.filter(order => order.position === position);
};

const movePizza = (state, action) => {
  let _state = [...state];
  let where = action.type;
  let possiblePositions = [
    'conveyor_1',
    'conveyor_2',
    'conveyor_3',
    'conveyor_4',
    'finish'
  ];

  let pizza = state.filter(order => order.id === action.payload)[0];
  let pizzaStateIndex = state.indexOf(pizza);
  pizza = state.splice(pizzaStateIndex)[0];

  let newPizzaPosition;
  switch (where) {
    case 'MOVE_ORDER_NEXT':
      if (pizza.position === possiblePositions[possiblePositions.length - 2]) {
        let recipe = pizza.recipe;
        let ingredients = pizza.ingredients;
        recipe.forEach(elem => {
          if (!(ingredients.indexOf(elem) >= 0)) {
            newPizzaPosition = possiblePositions.indexOf(pizza.position);
          } else {
            newPizzaPosition = possiblePositions.indexOf(pizza.position) + 1;
          }
        });
      } else {
        newPizzaPosition = possiblePositions.indexOf(pizza.position) + 1;
      }
      break;
    case 'MOVE_ORDER_BACK':
      if (pizza.position === possiblePositions[0]) {
        newPizzaPosition = possiblePositions.indexOf(pizza.position);
      } else {
        newPizzaPosition = possiblePositions.indexOf(pizza.position) - 1;
      }
      break;
    default:
      newPizzaPosition = possiblePositions.indexOf(pizza.position);
      break;
  }

  console.log(possiblePositions[newPizzaPosition]);
  pizza.position = possiblePositions[newPizzaPosition];
  _state[pizzaStateIndex] = pizza;

  return [..._state];
};

const addIngrigientToPizza = (state, action) => {
  let _state = [...state];

  let pizza = state.filter(order => order.position === action.payload.from)[0];
  let pizzaStateIndex = state.indexOf(pizza);
  pizza = state.splice(pizzaStateIndex)[0];

  pizza.ingredients.push(action.payload.ingredient);

  _state[pizzaStateIndex] = pizza;

  return [..._state];
};
