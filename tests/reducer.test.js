import { cartReducer } from '../src/reducers';
import * as constants from './reducerConstants';

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(cartReducer(undefined, {})).toEqual(constants.initialState);
  });

  it('should add a product to the initial state', () => {
    expect(cartReducer(constants.initialState, constants.addAction1)).toEqual(constants.addResult1);
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
});
