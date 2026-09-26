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

## Running Tests

Run the test suite using Jest:

```bash
npm test
```

Run tests in watch mode:

```bash
npm test -- --watch
```
