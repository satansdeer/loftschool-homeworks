import { CREATE_NEW_ORDER } from "../modules/clients";
import { MOVE_ORDER_NEXT, MOVE_ORDER_BACK } from "../actions/moveOrder";
import { ADD_INGREDIENT } from "../actions/ingredients";

// Реализуйте редьюсер
// Типы экшенов, которые вам нужно обрабатывать уже импортированы
// Обратите внимание на `orders.test.js`.
// Он поможет понять, какие значения должен возвращать редьюсер.

export default (state = [], action) => {
  let temp, stepIndex, orders, objectId;

  switch (action.type) {
    case CREATE_NEW_ORDER:
      if (state.length === 0) {
        return [
          {
            "id": 0,
            "recipe": [
              "pepper",
              "eggplant",
              "avocado",
              "shrimp"
            ],
            "ingredients": [],
            "position": "clients"
          }
        ];
      } else {
        state.push({
          "id": state.length,
          "recipe": [
            "pepper",
            "eggplant",
            "avocado",
            "shrimp"
          ],
          "ingredients": [],
          "position": "clients"
        });

        return Array.from(state);
      }
    case
    MOVE_ORDER_NEXT:
      objectId = action.payload;
      orders = { ...state[objectId] };
      temp = orders.position.split("_");
      // stepIndex = temp.length === 1 ? 1 : ++temp[1];
      if (temp.length === 1) {
        position = `conveyor_1`;
      } else if (temp[1] == 4) {
        if (orders.ingredients.length > 0) {
          position = "finish";
        } else {
          return Array.from(state);
        }

      } else {
        stepIndex = ++temp[1];
        position = `conveyor_${stepIndex}`;
      }
      orders.position = position;
      state[objectId] = orders;
      return Array.from(state);
    case
    MOVE_ORDER_BACK:
      objectId = action.payload;
      orders = { ...state[objectId] };
      temp = orders.position.split("_");
      let position;
      if (parseInt(temp[1]) === 1) {
        return Array.from(state);
      }
      stepIndex = parseInt(temp[1]);
      position = `conveyor_${--stepIndex}`;
      // }
      orders.position = position;
      state[objectId] = orders;
      return Array.from(state);
    case
    ADD_INGREDIENT:
      const { from, ingredient } = action.payload;
      const pizzaOnCurrentPos = state.filter(item => {
        if (item.position === from) {
          return item;
        }
      });

      if (pizzaOnCurrentPos.length === 0) {
        console.log("StateAreEqual");
        return state;
      }

      pizzaOnCurrentPos.filter(item => {
        if (item.recipe.filter(reciepeItem => {
          if (reciepeItem === ingredient) {
            return reciepeItem;
          }
        }).length > 0) {
          item.ingredients.push(ingredient);
          state[item.id] = item;
        }
      });

      return Array.from(state);


      console.log(pizzaOnCurrentPos);

      break;
    default:
      return state;
  }
}
;

export const getOrdersFor = (state, position) =>
  state.orders.filter(order => order.position === position);
