export const MOVE_ORDER_NEXT = "MOVE_ORDER_NEXT";
export const MOVE_ORDER_BACK = "MOVE_ORDER_BACK";

export const moveOrderNext = orderId => {
  console.log(orderId);
  return {
    type: MOVE_ORDER_NEXT,
    payload: orderId
  }
};

export const moveOrderBack = orderId => ({
  type: MOVE_ORDER_BACK,
  payload: orderId
});