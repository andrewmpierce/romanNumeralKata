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
