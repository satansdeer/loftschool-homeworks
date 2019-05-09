import roversConfig from '../../rovers.json';

export const getRoversInitialState = () =>
  roversConfig.items.reduce((accumulator, element, index) => {
    accumulator[element] = { isLoading: false, photos: [], error: false };
    return accumulator;
  }, {});
