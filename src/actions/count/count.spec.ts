import * as actions from './count.actions';

describe('Count actions', () => {
  it('incrementAction', () => {
    // Act
    const result = actions.incrementCountAction();

    // Assert
    expect(result.type).toEqual(actions.CountActionTypes.INCREMENT);
    expect(result.payload).toBeUndefined();
  });

  it('decreaseAction', () => {
    // Act
    const result = actions.decreaseCountAction();

    // Assert
    expect(result.type).toEqual(actions.CountActionTypes.DECREASE);
    expect(result.payload).toBeUndefined();
  });

  it('setValueAction', () => {
    // Arrange
    const value = 2;

    // Act
    const result = actions.setCountValueAction(value);

    // Assert
    expect(result.type).toEqual(actions.CountActionTypes.SET_VALUE);
    expect(result.payload).toEqual(value);
  });
});
