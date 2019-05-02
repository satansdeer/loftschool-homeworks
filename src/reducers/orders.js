import { CREATE_NEW_ORDER } from '../modules/clients';
import { MOVE_ORDER_NEXT, MOVE_ORDER_BACK } from '../actions/moveOrder';
import { ADD_INGREDIENT } from '../actions/ingredients';
import positionsMap from './positions';

const getIndex = (array, value) => {
  let resultIndex;

  array.forEach((item, index) => {
    if (item === value) {
      resultIndex = index;
    }
  });

  return resultIndex;
};

const createNewOrderInList = (state, { id, recipe }) => {
  return [
    { id, recipe, ingredients: [], position: positionsMap.initial },
    ...state
  ];
};

const moveNextItemBackwards = ({ position: positionOfMovedItem }) => {
  const conveyersArray = positionsMap.conveyers;

  if (positionOfMovedItem !== conveyersArray[0]) {
    const indexOfConveyersPosition = getIndex(
      conveyersArray,
      positionOfMovedItem
    );
    return conveyersArray[indexOfConveyersPosition - 1];
  }

  return positionOfMovedItem;
};

const moveNextItemForwards = ({
  position: positionOfMovedItem,
  ingredients: itemIngredients,
  recipe
}) => {
  const conveyersArray = positionsMap.conveyers;
  const conveyersLength = conveyersArray.length;
  const itemRecipeLength = recipe.length;

  if (positionOfMovedItem === positionsMap.initial) {
    return conveyersArray[0];
  }

  if (positionOfMovedItem !== conveyersArray[conveyersLength - 1]) {
    const indexOfConveyersPosition = getIndex(
      conveyersArray,
      positionOfMovedItem
    );

    return conveyersArray[indexOfConveyersPosition + 1];
  }

  if (
    positionOfMovedItem === conveyersArray[conveyersLength - 1] &&
    itemIngredients.length === itemRecipeLength
  ) {
    return positionsMap.finish;
  }

  return positionOfMovedItem;
};

const addIngredientIntoItem = (
  { recipe: itemRecipe, ingredients },
  { from, ingredient }
) => {
  if (itemRecipe.includes(ingredient)) {
    return [...ingredients, ingredient];
  }

  return [...ingredients];
};

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_NEW_ORDER:
      return createNewOrderInList(state, action.payload);
    case MOVE_ORDER_NEXT:
      return state.map(item => {
        if (item.id === action.payload) {
          return {
            ...item,
            position: moveNextItemForwards(item)
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
            position: moveNextItemBackwards(item)
          };
        } else {
          return item;
        }
      });
    case ADD_INGREDIENT:
      return state.map((item, index) => {
        if (index === 0) {
          return {
            ...item,
            ingredients: addIngredientIntoItem(item, action.payload)
          };
        } else {
          return item;
        }
      });

    default:
      return state;
  }
};

export const getOrdersFor = (state, position) =>
  state.orders.filter(order => order.position === position);
