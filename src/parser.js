const operations = require('./operations');

/**
 * Tokenizes an arithmetic expression into individual tokens.
 * @param {string} expression
 * @returns {string[]}
 */
function tokenize(expression) {
  if (!expression || typeof expression !== 'string') {
    return [];
  }
  const clean = expression.replace(/\s+/g, '');
  return clean.match(/\d+(\.\d+)?|[+\-*/%]/g) || [];
}

/**
 * Parses a numeric token into a number.
 * @param {string} token
 * @returns {number}
 */
function parseNumber(token) {
  return parseInt(token, 10);
}

/**
 * Executes a binary operation given two operands and an operator symbol.
 * @param {number} a
 * @param {string} op
 * @param {number} b
 * @returns {number}
 */
function applyOperator(a, op, b) {
  switch (op) {
    case '+':
      return operations.add(a, b);
    case '-':
      return operations.subtract(a, b);
    case '*':
      return operations.multiply(a, b);
    case '/':
      return operations.divide(a, b);
    case '%':
      return operations.percentage(a, b);
    default:
      throw new Error(`Unsupported operator: ${op}`);
  }
}

/**
 * Evaluates an arithmetic expression string.
 * @param {string} expression
 * @returns {number}
 */
function evaluate(expression) {
  const tokens = tokenize(expression);

  if (tokens.length === 0) {
    return 0;
  }

  // First pass: handle * / % operators (higher precedence)
  const values = [];
  const ops = [];
  let current = parseNumber(tokens[0]);

  for (let i = 1; i < tokens.length; i += 2) {
    const operator = tokens[i];
    const nextToken = tokens[i + 1];
    if (!nextToken) break;
    const nextNumber = parseNumber(nextToken);
    if (operator === '*' || operator === '/' || operator === '%') {
      // Compute immediately with current value
      current = applyOperator(current, operator, nextNumber);
    } else {
      // Push the current value and operator for later addition/subtraction
      values.push(current);
      ops.push(operator);
      current = nextNumber;
    }
  }
  // Push the last accumulated value
  values.push(current);

  // Second pass: handle + and - operators left to right
  let result = values[0];
  for (let i = 0; i < ops.length; i++) {
    result = applyOperator(result, ops[i], values[i + 1]);
  }

  return result;
}

module.exports = {
  tokenize,
  parseNumber,
  applyOperator,
  evaluate
};
