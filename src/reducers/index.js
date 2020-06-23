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
      let index = state.products.findIndex((product) => product.id === action.newProduct.id);

      if (index !== -1) {
        state.products[index] = { ...action.newProduct };
      } else {
        state.products.push(action.newProduct);
      }

      state.quantTotal += action.newProduct.quantAdicionada;
      state.precoTotal += action.newProduct.quantAdicionada * action.newProduct.preco;

      return {
        ...state,
        newValue: action.newValue,
      };
    case REMOVE_PRODUCT:
      // state.find(id);
      // se achar, faz update
      // se não achar, state.push({})
      return {
        ...state,
        newValue: action.newValue,
      };
    default:
      return state;
  }
};
