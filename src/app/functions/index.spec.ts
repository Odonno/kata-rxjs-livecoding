import { add } from '.';

describe('index.functions', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      const result = add(1, 1);

      expect(result).toBe(2);
    });
  });
});
