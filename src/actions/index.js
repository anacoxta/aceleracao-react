export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

export const addProduct = (newProduct) => ({
  type: ADD_PRODUCT,
  newProduct,
});

export const removeProduct = (deletedProduct) => ({
  type: REMOVE_PRODUCT,
  deletedProduct,
});

export const updateProduct = (product) => ({
  type: UPDATE_PRODUCT,
  product,
});
