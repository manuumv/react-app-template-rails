import { createStore } from './create';
import { countInitialState } from 'reducers/count/count.reducer';
import { ReduxState } from '../model/reduxState';

describe('create store', () => {
  it('should return the expected state and not add module hot', () => {
    const state: ReduxState = {
      count: countInitialState,
    };
    const expectedResult = state;

    const result = createStore();

    expect(result.getState()).toEqual(expectedResult);
  });
});
