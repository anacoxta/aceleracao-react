import { ADD_PRODUCT, REMOVE_PRODUCT } from '../actions';

const initialState = {
  totalPrice: 0,
  totalAmount: 0,
  products: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        totalPrice: state.totalPrice + action.newProduct.amount * action.newProduct.price,
        totalAmount: state.totalAmount + action.newProduct.amount,
        products: [...state.products, action.newProduct],
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        totalPrice: state.totalPrice - action.deletedProduct.amount * action.deletedProduct.price,
        totalAmount: state.totalAmount - action.deletedProduct.amount,
        products: state.products.map((product) => {
          if (product.id === action.deletedProduct.id) {
            return {
              ...product,
              amount: product.amount - action.deletedProduct.amount,
            };
          }

          return product;
        }),
      };
    default:
      return state;
  }
};
