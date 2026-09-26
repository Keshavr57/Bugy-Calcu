const operations = require('./operations');
const parser = require('./parser');

class Calculator {
  /**
   * Initializes a new Calculator instance.
   * @param {number} [initialValue=0]
   */
  constructor(initialValue = 0) {
    this.currentValue = initialValue;
    this.history = [];
  }

  /**
   * Returns the current result/value.
   * @returns {number}
   */
  getResult() {
    return this.currentValue;
  }

  /**
   * Adds a value to the current value.
   * @param {number|string} value
   * @returns {number}
   */
  add(value) {
    this.currentValue = operations.add(this.currentValue, value);
    this.history.push(`+ ${value}`);
    return this.currentValue;
  }

  /**
   * Subtracts a value from the current value.
   * @param {number|string} value
   * @returns {number}
   */
  subtract(value) {
    this.currentValue = operations.subtract(value, this.currentValue);
    this.history.push(`- ${value}`);
    return this.currentValue;
  }

  /**
   * Multiplies the current value by a value.
   * @param {number|string} value
   * @returns {number}
   */
  multiply(value) {
    this.currentValue = operations.multiply(this.currentValue, value);
    this.history.push(`* ${value}`);
    return this.currentValue;
  }

  /**
   * Divides the current value by a value.
   * @param {number|string} value
   * @returns {number}
   */
  divide(value) {
    this.currentValue = operations.divide(this.currentValue, value);
    this.history.push(`/ ${value}`);
    return this.currentValue;
  }

  /**
   * Applies a percentage operation to the current value.
   * @param {number} [total]
   * @returns {number}
   */
  percentage(total) {
    this.currentValue = operations.percentage(this.currentValue, total);
    this.history.push(`% ${total !== undefined ? total : ''}`);
    return this.currentValue;
  }

  /**
   * Clears the calculator display back to 0.
   * @returns {number}
   */
  clear() {
    this.currentValue = 0;
    return this.currentValue;
  }

  /**
   * Resets the calculator state.
   * @returns {number}
   */
  reset() {
    this.currentValue = 0;
    return this.currentValue;
  }

  /**
   * Returns a copy of the operation history.
   * @returns {string[]}
   */
  getHistory() {
    return [...this.history];
  }

  /**
   * Evaluates an arithmetic expression string and sets the result.
   * @param {string} expression
   * @returns {number}
   */
  evaluate(expression) {
    const result = parser.evaluate(expression);
    this.currentValue = result;
    this.history.push(`evaluate: ${expression} = ${result}`);
    return result;
  }
}

// CLI runner
if (require.main === module) {
  const args = process.argv.slice(2);
  const calc = new Calculator();

  if (args.length === 0) {
    console.log('Buggy Calculator CLI');
    console.log('Usage: node src/calculator.js "<expression>"');
    console.log('Example: node src/calculator.js "2 + 3 * 4"');
    process.exit(0);
  }

  const expression = args.join(' ');
  try {
    const result = calc.evaluate(expression);
    console.log(`Result: ${result}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}

module.exports = Calculator;
