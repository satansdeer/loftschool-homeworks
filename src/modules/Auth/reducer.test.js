import authReducer from './reducer';
import { addKey } from './actions';

const randomAction = {
  type: `RANDOM_ACTION_${parseInt(Math.random() * 1000, 10)}`
};

describe('authReducer auth', () => {
  const state0 = authReducer(undefined, randomAction);

  describe('action addKey', () => {
    it('Добавляет ключ в authReducer apiKey', () => {
      const testValue = '123';
      const state1 = authReducer(state0, addKey(testValue));

      expect(state1.apiKey).toBe(testValue);
    });
  });
});
