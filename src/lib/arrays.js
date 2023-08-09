const getNthElement = (index, array) => array[index % array.length];

const arrayToCSVString = array => array.toString();

const csvStringToArray = string => string.split(',');

const addToArray = (element, array) => array.push(element);

const addToArray2 = (element, array) => array.concat(element);

const removeNthElement = (index, array) => array.splice(index, 1);

const numbersToStrings = numbers => numbers.map(number => number.toString());

const uppercaseWordsInArray = strings =>
  strings.map(string => string.toUpperCase());

const reverseWordsInArray = strings =>
  strings.map(string =>
    string
      .split('')
      .reverse()
      .join('')
  );

const onlyEven = numbers => numbers.filter(number => number % 2 === 0);

const removeNthElement2 = (index, array) =>
  array.filter(element => array.indexOf(element) !== index);

const elementsStartingWithAVowel = strings =>
  strings.filter(string => /^[aeiou]/i.test(string));

const removeSpaces = string => string.split(' ').join('');

const sumNumbers = numbers => numbers.reduce((a, b) => a + b, 0);

const sortByLastLetter = strings =>
  strings.sort(
    (a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)
  );

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
