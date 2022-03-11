import { Product } from 'src/app/models';
import { addToCart, removeFromCart } from './cart.actions';
import { cartReducer, initialCartState } from './cart.reducers';

describe('cart.reducers', () => {
  it("should be initial state on 'NOOP' action", () => {
    const state = cartReducer(initialCartState, { type: 'NOOP' });

    expect(state.products).toEqual([]);
  });

  describe('addToCart', () => {
    it('should add product to cart', () => {
      const product = {
        id: 1,
        label: 'Product 1',
      } as Product;

      const action = addToCart({ product });

      const state = cartReducer(initialCartState, action);

      expect(state.products).toEqual([product]);
    });
  });

  describe('removeFromCart', () => {
    it('should remove product from cart', () => {
      const product = {
        id: 1,
        label: 'Product 1',
      } as Product;

      const initialState = {
        products: [product],
      };

      const action = removeFromCart({ product });

      const state = cartReducer(initialState, action);

      expect(state.products).toEqual([]);
    });
  });
});
