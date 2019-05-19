import RoverPhotosReducer from './reducer';
import { changeSol, fetchPhotosRequest, fetchPhotosSuccess } from './actions';

const randomAction = {
  type: `RANDOM_ACTION_${parseInt(Math.random() * 1000, 10)}`
};

describe('Reducer RoverPhotos', () => {
  const state0 = RoverPhotosReducer(undefined, randomAction);

  describe('action changeSol', () => {
    it('Меняет номер сола в sol.current', () => {
      const testValue = 10;
      const state1 = RoverPhotosReducer(state0, changeSol(testValue));

      expect(state1.sol.current).toBe(testValue);
    });
  });
  ['curiosity', 'opportunity', 'spirit'].forEach(name => {
    const sol = 10;
    const apiKey = 'XeYl3HQ5oWm8y5kedV1HvoXGzjH2YuK2SLg5CzKa';
    const state1 = RoverPhotosReducer(
      state0,
      fetchPhotosRequest(name, sol, apiKey)
    );
    describe(`action fetchPhotosRequest("${name}", 10)`, () => {
      it(`Создает запись в редьсере photos.${name} [10]: {isLoading: true, photos: [], isLoaded: false}`, () => {
        expect(state1.photos[name]).toEqual({
          [sol]: { isLoading: true, photos: [], isLoaded: false }
        });
      });
    });
    describe(`action fetchPhotosSuccess({"name: ${name}", sol: 10, photos: [1, 2, 3]})`, () => {
      const state2 = RoverPhotosReducer(
        state1,
        fetchPhotosSuccess([1, 2, 3], name, sol)
      );
      it(`Создает запись в редьсере photos.${name} [10]: {isLoading: true, photos: [1, 2, 3], isLoaded: false}`, () => {
        expect(state2.photos[name]).toEqual({
          [sol]: { isLoading: false, photos: [1, 2, 3], isLoaded: true }
        });
      });
    });
  });
});
