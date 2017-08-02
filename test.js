const romanConverter = require('./romanNumerals');

test('recognizes basic numeral values', () => {
  expect(romanConverter('I')).toBe(1);
  expect(romanConverter('V')).toBe(5);
  expect(romanConverter('X')).toBe(10);
  expect(romanConverter('L')).toBe(50);
  expect(romanConverter('C')).toBe(100);
  expect(romanConverter('M')).toBe(1000);
});

test('recognizes basic addition', () => {
  expect(romanConverter('III')).toBe(3);
  expect(romanConverter('VI')).toBe(6);
  expect(romanConverter('XV')).toBe(15);
  expect(romanConverter('MCLX')).toBe(1160);
});

test('recognizes basic subtraction', () => {
  expect(romanConverter('IV')).toBe(4);
  expect(romanConverter('IX')).toBe(9);
  expect(romanConverter('CM')).toBe(900);
  expect(romanConverter('MXC')).toBe(1090);
});

test('recognizes invalid roman numeral', () => {
  expect(() => romanConverter('AAA')).toThrowError('That is not a valid Roman Numeral');
});

test('basic int to roman conversion', () => {
  expect(romanConverter(1)).toBe('I');
  expect(romanConverter(5)).toBe('V');
  expect(romanConverter(10)).toBe('X');
  expect(romanConverter(50)).toBe('L');
  expect(romanConverter(100)).toBe('C');
  expect(romanConverter(1000)).toBe('M');

});

test('stacking int to roman conversion', () => {
  expect(romanConverter(11)).toBe('XI');
  expect(romanConverter(8)).toBe('VIII');
  expect(romanConverter(110)).toBe('CX');

});
