import * as actions from '../src/actions';

const product = {
  id: 1,
  amount: 2,
  price: 23,
  size: 'G',
};

describe('actions', () => {
  it('should create an action to add a product', () => {
    const expectedAction = {
      type: actions.ADD_PRODUCT,
      newProduct: product,
    };

    expect(actions.addProduct(product)).toEqual(expectedAction);
  });

  it('should create an action to remove a product', () => {
    const expectedAction = {
      type: actions.REMOVE_PRODUCT,
      deletedProduct: product,
    };

    expect(actions.removeProduct(product)).toEqual(expectedAction);
  });

  it('should create an action to update product amount', () => {
    const expectedAction = {
      type: actions.UPDATE_PRODUCT,
      product,
    };

    expect(actions.updateProduct(product)).toEqual(expectedAction);
  });
});
