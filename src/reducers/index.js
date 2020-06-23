import { ADD_PRODUCT, REMOVE_PRODUCT } from '../actions';

const initialState = {
  precoTotal: 0,
  quantTotal: 0,
  products: [],
};

// {
//   id,
//   quantidade,
//   preco,
//   tamanho
// }

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        precoTotal: state.precoTotal + action.newProduct.amount * action.newProduct.price,
        quantTotal: state.quantTotal + action.newProduct.amount,
        products: [...state.products, action.newProduct],
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        precoTotal: state.precoTotal - action.deletedProduct.amount * action.deletedProduct.price,
        quantTotal: state.quantTotal - action.deletedProduct.amount,
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
