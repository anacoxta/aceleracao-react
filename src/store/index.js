import { createStore } from 'redux';
import { cartReducer } from '../reducers';

export const Store = createStore(cartReducer);
