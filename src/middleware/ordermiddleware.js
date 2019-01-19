import { MOVE_ORDER_BACK, MOVE_ORDER_NEXT } from "../actions/moveOrder";
import { ADD_INGREDIENT } from "../actions/ingredients";
import { finish, mapConveyor, mapConveyorBack } from "../mapsConveyor";
import { CREATE_NEW_ORDER } from "../modules/clients";

const switchContainer = (filterOrders, mapCart) => {
  if (filterOrders && filterOrders.position) {
    const conveyor = mapCart[filterOrders.position];
    let endCreateOrder = true;
    if (conveyor === finish) {
      endCreateOrder = filterOrders.recipe.every(item => filterOrders.ingredients.includes(item));
    }
    filterOrders.position = endCreateOrder ? conveyor : filterOrders.position;
    return filterOrders;
  }
};

const changeOrderConveyor = (orders, id, mapContainer) => {
  return orders.map(order => {
    if (+order.id === +id) {
      return switchContainer({ ...order }, mapContainer);
    }
    return order;
  });
};

export default store => next => action => {
  const { orders } = store.getState();
  const { type, payload } = action;
  let newOrders = orders;

  if (type === CREATE_NEW_ORDER) {
    return next(action);
  }

  if (type === MOVE_ORDER_NEXT) {
    newOrders = changeOrderConveyor(orders, payload, mapConveyor);
  }
  if (type === MOVE_ORDER_BACK) {
    newOrders = changeOrderConveyor(orders, payload, mapConveyorBack);
  }
  if (type === ADD_INGREDIENT) {
    let findFrom = orders.find(item => item.position === payload.from);
    findFrom = { ...findFrom };
    newOrders = orders.map(order => {
      if (order.id === findFrom.id) {
        findFrom.ingredients = [...order.ingredients, payload.ingredient];
        return findFrom;
      }
      return order;
    });
  }

  action.payload = {
    ...payload,
    orders: newOrders
  };

  return next(action);
};