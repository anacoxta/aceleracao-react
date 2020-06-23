export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  newProduct: product,
});

export const removeProduct = (product) => ({
  type: REMOVE_PRODUCT,
  newProduct: product,
});
