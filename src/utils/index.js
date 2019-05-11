import roversConfig from '../rovers.json';

export const getRoversInitialState = () =>
  roversConfig.items.reduce((accumulator, element) => {
    accumulator[element] = {
      // isLoading: false,
      // photos: [],
      // error: false,
      // isLoaded: false
    };
    return accumulator;
  }, {});
