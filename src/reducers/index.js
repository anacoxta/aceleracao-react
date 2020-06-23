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
        precoTotal: state.precoTotal - action.newProduct.quantRemovida * action.newProduct.preco,
        quantTotal: state.quantTotal - action.newProduct.quantRemovida,
        products: [
          state.products.map((product) => {
            if (product.id === action.newProduct.id) {
              return {
                ...product,
                quantidade: product.quantidade - action.newProduct.quantRemovida,
              };
            }

            return product;
          }),
        ],
      };
    default:
      return state;
  }
};
