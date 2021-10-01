import { AnyAction } from '@reduxjs/toolkit';
import * as actions from 'actions/count/count.actions';
import { CountState } from 'model/countState';
import { countInitialState, countReducer } from './count.reducer';

describe('Count reducer', () => {
  it('should return the current state if action type is unknown', () => {
    // Arrange
    const action: AnyAction = { type: null };
    const expectedResult: CountState = countInitialState;

    // Act
    const result = countReducer(countInitialState, action);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('should increment the value and click if action type is incrementCountAction.type', () => {
    // Arrange
    const action: AnyAction = { type: actions.incrementCountAction.type };
    const expectedResult: CountState = { value: 1, clicks: 1 };

    // Act
    const result = countReducer(countInitialState, action);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('should decrease the value and increase click if action type is decreaseCountAction.type', () => {
    // Arrange
    const action: AnyAction = { type: actions.decreaseCountAction.type };
    const expectedResult: CountState = { value: -1, clicks: 1 };

    // Act
    const result = countReducer(countInitialState, action);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('should set the given value if action type is setCountValueAction.type', () => {
    // Arrange
    const action: AnyAction = {
      type: actions.setCountValueAction.type,
      payload: 4,
    };
    const expectedResult: CountState = { value: 4, clicks: 0 };

    // Act
    const result = countReducer(countInitialState, action);

    // Assert
    expect(result).toEqual(expectedResult);
  });
});
