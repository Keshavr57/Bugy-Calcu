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

  // First pass: handle *, /, % operators (higher precedence)
  const intermediate = [];
  let i = 0;
  while (i < tokens.length) {
    const token = tokens[i];
    if (token === '*' || token === '/' || token === '%') {
      // Perform operation with previous number and next number
      const prev = intermediate.pop();
      const next = tokens[i + 1];
      const computed = applyOperator(parseNumber(prev), token, parseNumber(next));
      intermediate.push(String(computed));
      i += 2; // Skip the next number as it's been consumed
    } else {
      intermediate.push(token);
      i += 1;
    }
  }

  // Second pass: handle + and - (left to right)
  let result = parseNumber(intermediate[0]);
  for (let j = 1; j < intermediate.length; j += 2) {
    const operator = intermediate[j];
    const nextNumber = parseNumber(intermediate[j + 1]);
    result = applyOperator(result, operator, nextNumber);
  }

  return result;
}

module.exports = {
  tokenize,
  parseNumber,
  applyOperator,
  evaluate
};
