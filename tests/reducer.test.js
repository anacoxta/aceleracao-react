import { cartReducer } from '../src/reducers';
import * as constants from './reducerConstants';

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(cartReducer(undefined, {})).toEqual(constants.initialState);
  });

  it('should add a product to the initial state', () => {
    expect(cartReducer(constants.initialState, constants.addAction)).toEqual(constants.addResult);
  });

  it('should remove a product from the cart', () => {
    expect(cartReducer(constants.addResult, constants.removeAction)).toEqual(
      constants.removeResult
    );
  });
});
