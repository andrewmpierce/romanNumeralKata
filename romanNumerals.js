
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

function getRomanValues(integer) {
  var romanValues = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    1000: 'M'
  };
  if (romanValues[integer]) {
    return romanValues[integer];
  } else {
    throw new Error('That is not a valid Roman Numeral');
  }
}

function intToRomanConverter(integer) {
  var romanInts = [1000, 100, 50, 10, 5, 1];
  var romanValues = [];
  romanInts.map(function (element) {
    if (integer/element >= 1) {
      var answer = Math.trunc(integer/element);
      integer -= answer * element;
      romanValues.push(getRomanValues(element).repeat(answer));
    }
  });
  return romanValues.toString().replace( /,/g, "" );
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
