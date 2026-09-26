# Issue Tracker: buggy-calculator

This document lists active issue reports filed by users and testers.

---

### [Issue #1: `subtract()` method inverts operand order](https://github.com/Keshavr57/Bugy-Calcu/issues/1)

- **Status**: Open
- **Type**: Bug
- **Component**: `src/calculator.js`
- **Reporter**: `@user_dev`
- **Description**:
  When invoking `.subtract()` on a `Calculator` instance initialized with an existing value, the calculation produces an unexpected negative number.
- **Steps to Reproduce**:
  ```javascript
  const Calculator = require('./src/calculator');
  const calc = new Calculator(20);
  const result = calc.subtract(5);
  console.log(result);
  ```
- **Expected Result**: `15` (`20 - 5`)
- **Actual Result**: `-15` (`5 - 20`)

---

### [Issue #2: Expression evaluator ignores standard operator precedence](https://github.com/Keshavr57/Bugy-Calcu/issues/2)

- **Status**: Open
- **Type**: Bug
- **Component**: `src/parser.js`
- **Reporter**: `@math_tester`
- **Description**:
  Evaluating arithmetic expressions evaluates operators sequentially from left to right instead of evaluating multiplication and division before addition and subtraction.
- **Steps to Reproduce**:
  ```javascript
  const Calculator = require('./src/calculator');
  const calc = new Calculator();
  const result = calc.evaluate("2 + 3 * 4");
  console.log(result);
  ```
- **Expected Result**: `14` (`2 + (3 * 4)`)
- **Actual Result**: `20` (`(2 + 3) * 4`)

---

### [Issue #3: Multiplication by zero fails to return zero](https://github.com/Keshavr57/Bugy-Calcu/issues/3)

- **Status**: Open
- **Type**: Bug
- **Component**: `src/operations.js`
- **Reporter**: `@qa_lead`
- **Description**:
  Multiplying any number by `0` unexpectedly returns the non-zero operand instead of `0`.
- **Steps to Reproduce**:
  ```javascript
  const operations = require('./src/operations');
  const result = operations.multiply(5, 0);
  console.log(result);
  ```
- **Expected Result**: `0`
- **Actual Result**: `5`

---

### [Issue #4: Decimal numbers lose fractional values in expressions](https://github.com/Keshavr57/Bugy-Calcu/issues/4)

- **Status**: Open
- **Type**: Bug
- **Component**: `src/parser.js`
- **Reporter**: `@data_analyst`
- **Description**:
  When evaluating string expressions containing decimal/floating-point values, the numbers appear to be truncated to integers.
- **Steps to Reproduce**:
  ```javascript
  const Calculator = require('./src/calculator');
  const calc = new Calculator();
  const result = calc.evaluate("10.5 + 2.5");
  console.log(result);
  ```
- **Expected Result**: `13`
- **Actual Result**: `12`
