import * as types from '../src/actions';

const initialState = {
  totalPrice: 0,
  totalAmount: 0,
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
};

const decrementProduct = {
  id: 1,
  amount: -1,
  price: 23,
};

const addResult = {
  totalPrice: 46,
  totalAmount: 2,
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
  totalPrice: 23,
  totalAmount: 1,
  products: [
    {
      id: 1,
      amount: 1,
      price: 23,
      size: 'G',
    },
  ],
};

const addAction = {
  type: types.ADD_PRODUCT,
  newProduct,
};

const removeAction = {
  type: types.REMOVE_PRODUCT,
  deletedProduct,
};

const decrementAction = {
  type: types.UPDATE_PRODUCT,
  product: decrementProduct,
};

export {
  initialState,
  newProduct,
  deletedProduct,
  decrementProduct,
  addAction,
  removeAction,
  decrementAction,
  addResult,
  removeResult,
};
