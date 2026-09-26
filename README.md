# Buggy Calculator

A lightweight, zero-dependency JavaScript calculator built for Node.js. It supports chained arithmetic operations, percentage calculations, state management, and mathematical expression evaluation.

## Benchmark Task

> Several calculator operations are not working correctly. Investigate the repository, identify the root causes, fix the implementation, and make sure the test suite passes. Do not remove or weaken existing tests.

## Features & Supported Operations

- **Addition (`+`)**: Adds numbers or accumulates to the running calculator total.
- **Subtraction (`-`)**: Subtracts values from the running total or evaluates binary subtraction.
- **Multiplication (`*`)**: Multiplies numbers, including zero and negative numbers.
- **Division (`/`)**: Divides numbers with proper handling for division by zero.
- **Percentage (`%`)**: Computes percentages of values or converts values to their percentage fraction.
- **Clear / Reset**: Clears the current display value or resets calculator state.
- **Expression Evaluation**: Parses and calculates multi-operator arithmetic expressions with standard operator precedence.

## Project Structure

```
buggy-calculator/
├── src/
│   ├── calculator.js    # Stateful Calculator class and CLI entry point
│   ├── operations.js    # Core mathematical operations
│   └── parser.js        # Tokenizer and expression evaluation engine
├── tests/
│   ├── calculator.test.js
│   └── operations.test.js
├── package.json
├── README.md
├── ISSUES.md
└── .gitignore
```

## Installation

Ensure [Node.js](https://nodejs.org/) (version 16 or later) is installed.

Install development dependencies:

```bash
npm install
```

## Usage

### Command Line Interface

You can evaluate mathematical expressions directly from the terminal:

```bash
node src/calculator.js "2 + 3 * 4"
# Output: Result: 14
```

Or via npm:

```bash
npm start -- "10 + 20 / 2"
```

### Programmatic Usage

```javascript
const Calculator = require('./src/calculator');

// Stateful chaining
const calc = new Calculator(10);
calc.add(5);        // 15
calc.subtract(3);   // 12
calc.multiply(2);   // 24
calc.divide(4);     // 6
console.log(calc.getResult()); // 6

// Expression evaluation
const result = calc.evaluate("10 + 5 * 2");
console.log(result); // 20
```

## Git Repository

Clone and set up the repository locally:

```bash
git clone https://github.com/Keshavr57/Bugy-Calcu.git
cd buggy-calculator
```

Inspect commit history or status:

```bash
git status
git log -1
```

## Running Tests

Run the test suite using Jest:

```bash
npm test
```

Run tests in watch mode:

```bash
npm test -- --watch
```

## Known Issues

The following issues have been reported by users and need investigation:

### Issue #101: `subtract()` method inverts operand order
- **Reporter**: `@user_dev`
- **Description**: When invoking `.subtract()` on a Calculator instance initialized with a starting value, the result is inverted.
- **Steps to Reproduce**:
  ```javascript
  const calc = new Calculator(20);
  const result = calc.subtract(5);
  // Expected: 15
  // Actual: -15
  ```

### Issue #102: Expression evaluator ignores standard operator precedence
- **Reporter**: `@math_tester`
- **Description**: Expression evaluation currently computes tokens sequentially from left to right instead of respecting operator precedence (`*` and `/` before `+` and `-`).
- **Steps to Reproduce**:
  ```javascript
  const calc = new Calculator();
  const result = calc.evaluate("2 + 3 * 4");
  // Expected: 14
  // Actual: 20
  ```

### Issue #103: Multiplication by zero fails to return zero
- **Reporter**: `@qa_lead`
- **Description**: Calling the multiplication operation with `0` as an operand returns the non-zero operand rather than `0`.
- **Steps to Reproduce**:
  ```javascript
  const operations = require('./src/operations');
  const result = operations.multiply(5, 0);
  // Expected: 0
  // Actual: 5
  ```

### Issue #104: Decimal numbers lose fractional values in expressions
- **Reporter**: `@data_analyst`
- **Description**: Floating-point numbers passed in expression strings appear truncated to integers prior to calculation.
- **Steps to Reproduce**:
  ```javascript
  const calc = new Calculator();
  const result = calc.evaluate("10.5 + 2.5");
  // Expected: 13
  // Actual: 12
  ```

