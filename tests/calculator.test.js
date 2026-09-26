const Calculator = require('../src/calculator');

describe('Calculator', () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator();
  });

  it('initializes with default value 0', () => {
    expect(calc.getResult()).toBe(0);
  });

  it('initializes with a specified initial value', () => {
    const customCalc = new Calculator(10);
    expect(customCalc.getResult()).toBe(10);
  });

  it('performs addition on current value', () => {
    calc.add(5);
    expect(calc.getResult()).toBe(5);
    calc.add(10);
    expect(calc.getResult()).toBe(15);
  });

  it('performs subtraction on current value', () => {
    const customCalc = new Calculator(20);
    expect(customCalc.subtract(5)).toBe(15);
  });

  it('performs multiplication on current value', () => {
    const customCalc = new Calculator(4);
    expect(customCalc.multiply(3)).toBe(12);
  });

  it('clears current value back to 0', () => {
    calc.add(50);
    expect(calc.clear()).toBe(0);
    expect(calc.getResult()).toBe(0);
  });

  it('evaluates basic expressions respecting operator precedence', () => {
    const result = calc.evaluate('2 + 3 * 4');
    expect(result).toBe(14);
  });
});
