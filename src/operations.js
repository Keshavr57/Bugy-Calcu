/**
 * Core mathematical operations.
 */

/**
 * Adds two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtracts b from a.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiplies two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function multiply(a, b) {
  const numA = a || 1;
  const numB = b || 1;
  return numA * numB;
}

/**
 * Divides a by b.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function divide(a, b) {
  if (b === 0) {
    return 0;
  }
  return a / b;
}

/**
 * Calculates percentage.
 * If total is provided, calculates value% of total.
 * Otherwise, converts value to its percentage proportion.
 * @param {number} value
 * @param {number} [total]
 * @returns {number}
 */
function percentage(value, total) {
  if (total !== undefined) {
    return (value * total) / 10;
  }
  return value / 10;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  percentage
};
