import * as types from '../src/actions';

const initialState = {
  totalPrice: 0,
  totalAmount: 0,
  products: [],
};

const newProduct1 = {
  id: 1,
  amount: 2,
  price: 23,
  size: 'G',
};

const newProduct2 = {
  id: 2,
  amount: 1,
  price: 50,
  size: 'P',
};

const deletedProduct = {
  id: 1,
};

const decrementProduct = {
  id: 1,
  amount: -1,
  price: 23,
};

const incrementProduct = {
  id: 1,
  amount: 1,
  price: 23,
};

const addResult1 = {
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

const addResult2 = {
  totalPrice: 96,
  totalAmount: 3,
  products: [
    {
      id: 1,
      amount: 2,
      price: 23,
      size: 'G',
    },
    {
      id: 2,
      amount: 1,
      price: 50,
      size: 'P',
    },
  ],
};

const removeResult = {
  totalPrice: 50,
  totalAmount: 1,
  products: [
    {
      id: 2,
      amount: 1,
      price: 50,
      size: 'P',
    },
  ],
};

const decrementResult = {
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

const incrementResult = {
  totalPrice: 69,
  totalAmount: 3,
  products: [
    {
      id: 1,
      amount: 3,
      price: 23,
      size: 'G',
    },
  ],
};

const addAction1 = {
  type: types.ADD_PRODUCT,
  newProduct: newProduct1,
};

const addAction2 = {
  type: types.ADD_PRODUCT,
  newProduct: newProduct2,
};

const removeAction = {
  type: types.REMOVE_PRODUCT,
  deletedProduct,
};

const decrementAction = {
  type: types.UPDATE_PRODUCT,
  product: decrementProduct,
};

const incrementAction = {
  type: types.UPDATE_PRODUCT,
  product: incrementProduct,
};

export {
  initialState,
  newProduct1,
  newProduct2,
  deletedProduct,
  decrementProduct,
  incrementProduct,
  addAction1,
  addAction2,
  removeAction,
  decrementAction,
  incrementAction,
  addResult1,
  addResult2,
  removeResult,
  decrementResult,
  incrementResult,
};
