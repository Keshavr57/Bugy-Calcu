const operations = require('../src/operations');

describe('operations module', () => {
  describe('add', () => {
    it('adds two positive numbers correctly', () => {
      expect(operations.add(2, 3)).toBe(5);
    });

    it('adds negative numbers correctly', () => {
      expect(operations.add(-4, -6)).toBe(-10);
    });
  });

  describe('subtract', () => {
    it('subtracts two numbers correctly', () => {
      expect(operations.subtract(10, 4)).toBe(6);
    });
  });

  describe('multiply', () => {
    it('multiplies two positive numbers correctly', () => {
      expect(operations.multiply(3, 4)).toBe(12);
    });
  });

  describe('divide', () => {
    it('divides two numbers correctly', () => {
      expect(operations.divide(20, 4)).toBe(5);
    });
  });
});
