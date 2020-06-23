import { cartReducer } from '../src/reducers';
import * as constants from './reducerConstants';

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(cartReducer(undefined, {})).toEqual(constants.initialState);
  });

  it('should add a product to the initial state', () => {
    expect(cartReducer(constants.initialState, constants.addAction)).toEqual(constants.addResult);
  });

  it('should decrement product amount', () => {
    expect(cartReducer(constants.addResult, constants.decrementAction)).toEqual(
      constants.removeResult
    );
  });
});
