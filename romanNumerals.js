
function getIntValues(letter) {
  var numeralValues = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'M': 1000
  };
  if (numeralValues[letter]) {
    return numeralValues[letter];
  } else {
    throw new Error('That is not a valid Roman Numeral');
  }
}

function intToRomanConverter(integer) {

}

function romanToIntConverter(numeral) {
  var sum = 0;
  number_array = [];
  var numeral_array = numeral.split('');
  numeral_array.map(function (element) {
    return number_array.push(getIntValues(element));
  });
  number_array.map(function (element, index) {
    if (number_array[index+1] > element) {
      sum -= element;
    } else {
      sum += element
    }
  });

  return sum;
}

function romanConverter(value) {
  if (isNaN(value)) {
    return romanToIntConverter(value);
  } else {
    return intToRomanConverter(value);
  }
}

module.exports = romanConverter;
