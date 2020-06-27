import { cartReducer } from '../src/reducers';
import * as constants from './reducerConstants';

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(cartReducer(undefined, {})).toEqual(constants.initialState);
  });

  it('should add a product to the initial state', () => {
    expect(cartReducer(constants.initialState, constants.addAction1)).toEqual(constants.addResult1);
  });

  it('should add another product to the cart', () => {
    expect(cartReducer(constants.addResult1, constants.addAction2)).toEqual(constants.addResult2);
  });

  it('should decrement product amount', () => {
    expect(cartReducer(constants.addResult1, constants.decrementAction)).toEqual(
      constants.decrementResult
    );
  });

  it('should increment product amount', () => {
    expect(cartReducer(constants.addResult1, constants.incrementAction)).toEqual(
      constants.incrementResult
    );
  });

  it('should remove a product from cart', () => {
    expect(cartReducer(constants.addResult2, constants.removeAction)).toEqual(
      constants.removeResult
    );
  });
});
