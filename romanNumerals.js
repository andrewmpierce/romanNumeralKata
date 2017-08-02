
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

  return getValues(numeral);
}
module.exports = romanConverter;
