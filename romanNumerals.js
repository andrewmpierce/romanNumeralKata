
function getValues(letter) {
  var numeralValues = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'M': 1000
  };
  return numeralValues[letter];
}

function romanConverter(numeral) {
  var sum = 0;
  var numeral_array = numeral.split('');
  numeral_array.map(function (element) {
    return sum += getValues(element);
  });

  return sum;
}
module.exports = romanConverter;
