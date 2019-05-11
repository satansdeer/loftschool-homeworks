import roversConfig from '../rovers.json';

export const getRoversInitialState = () =>
  roversConfig.items.reduce((accumulator, element) => {
    accumulator[element] = {};
    return accumulator;
  }, {});
