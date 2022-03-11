import { AppState } from '..';
import { selectCartCount } from './cart.selectors';

describe('cart.selectors', () => {
  describe('selectCartCount', () => {
    it('should return the number of products in the cart', () => {
      const state = {
        cart: {
          products: [
            {
              id: 1,
              label: 'Product 1',
            },
            {
              id: 2,
              label: 'Product 2',
            },
          ],
        },
      } as AppState;

      const result = selectCartCount(state);

      expect(result).toBe(2);
    });
  });
});
