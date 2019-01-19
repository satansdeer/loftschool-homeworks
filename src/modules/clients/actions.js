export const CREATE_NEW_ORDER = "CREATE_NEW_ORDER";

export const createNewOrder = (id, recipe) => {
  return {
    type: CREATE_NEW_ORDER,
    payload: { id, recipe }
  };
};