export const CREATE_NEW_ORDER = 'CREATE_NEW_ORDER';
export const MOVE_ORDER_NEXT = 'MOVE_ORDER_NEXT';
export const MOVE_ORDER_BACK = 'MOVE_ORDER_BACK';
export const ADD_INGREDIENT = 'ADD_INGREDIENT';

export const createNewOrder = (id, recipe) => ({
  type: CREATE_NEW_ORDER,
  payload: { id, recipe }
});
export const moveOrderNext = () => {};
export const moveOrderBack = () => {};
export const addIngridient = () => {};
