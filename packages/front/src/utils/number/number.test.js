import {
  isNumber,
  inRange,
  formatPercentage,
  convertDecimal,
  formatCurrency,
  isEven,
  isOdd,
  isInteger,
  random,
  isFloat
} from './index';

describe('number', () => {
  it('should be falsy that an object is a number', () => {
    expect(isNumber({})).toBeFalsy();
  });
  it('should be truthy that an integer is a number', () => {
    expect(isNumber(1)).toBeTruthy();
  });
  it('should be truthy that a float is a number', () => {
    expect(isNumber(0.5)).toBeTruthy();
  });
  it('should be falsy than 1 is in range between 5 and 7', () => {
    expect(inRange(1, 5, 7)).toBeFalsy();
  });
  it('should be truthy than 6 is in range between 5 and 7', () => {
    expect(inRange(6, 5, 7)).toBeTruthy();
  });
  it('should be truthy that 2 is even', () => {
    expect(isEven(2)).toBeTruthy();
  });
  it('should be falsy that 3 is even', () => {
    expect(isEven(3)).toBeFalsy();
  });
  it('should be falsy that 2 is odd', () => {
    expect(isOdd(2)).toBeFalsy();
  });
  it('should be truthy that 3 is odd', () => {
    expect(isOdd(3)).toBeTruthy();
  });
  it('should format to percentage a given number', () => {
    expect(formatPercentage(50)).toBe('50%');
  });
  it('should represent the given number as binary', () => {
    expect(convertDecimal(10, 2)).toBe('1010');
  });
  it('should represent the given number as octal', () => {
    expect(convertDecimal(10, 8)).toBe('12');
  });
  it('should represent the given number as hexadecimal', () => {
    expect(convertDecimal(10, 16)).toBe('a');
  });
  it('should format the given number in the currency specified', () => {
    expect(formatCurrency(1234.56, 'en-US', 'USD')).toBe('$1,234.56');
  });
  it('should be truthy that 3 is an integer', () => {
    expect(isInteger(3)).toBeTruthy();
  });
  it('should be falsy that 3.14 is an integer', () => {
    expect(isInteger(3.14)).toBeFalsy();
  });
  it('should be falsy that 3 is a float', () => {
    expect(isFloat(3)).toBeFalsy();
  });
  it('should be truthy that 3.14 is a float', () => {
    expect(isFloat(3.14)).toBeTruthy();
  });
  it('should get a random number that is in range between the given numbers', () => {
    const min = 1;
    const max = 10;
    const randomNumber = random(min, max);
    expect(inRange(randomNumber, min, max)).toBeTruthy();
  });
});
