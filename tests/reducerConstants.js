import * as types from '../src/actions';

const initialState = {
  precoTotal: 0,
  quantTotal: 0,
  products: [],
};

const newProduct = {
  id: 1,
  amount: 2,
  price: 23,
  size: 'G',
};

const deletedProduct = {
  id: 1,
  amount: 1,
  price: 23,
};

const addAction = {
  type: types.ADD_PRODUCT,
  newProduct,
};

const removeAction = {
  type: types.REMOVE_PRODUCT,
  deletedProduct,
};

const addResult = {
  precoTotal: 46,
  quantTotal: 2,
  products: [
    {
      id: 1,
      amount: 2,
      price: 23,
      size: 'G',
    },
  ],
};

const removeResult = {
  precoTotal: 23,
  quantTotal: 1,
  products: [
    {
      id: 1,
      amount: 1,
      price: 23,
      size: 'G',
    },
  ],
};

export {
  initialState,
  newProduct,
  deletedProduct,
  addAction,
  removeAction,
  addResult,
  removeResult,
};
