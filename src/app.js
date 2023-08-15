const express = require('express');

const strings = require('./lib/strings');
const numbers = require('./lib/numbers');
const booleans = require('./lib/booleans');
const arrays = require('./lib/arrays');

const app = express();

app.use(express.json());

app.get('/strings/hello/:string', (req, res) => {
  res.status(200).json({ result: strings.sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.status(200).json({ result: strings.uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.status(200).json({ result: strings.lowercase(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  return req.query.length
    ? res.status(200).json({ result: strings.firstCharacters(req.params.string, req.query.length) })
    : res.status(200).json({ result: strings.firstCharacter(req.params.string) });
});

app.get('/numbers/add/:a/and/:b', (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.params.b);

  return Number.isNaN(a) || Number.isNaN(b)
    ? res.status(400).json({ error: 'Parameters must be valid numbers.' })
    : res.status(200).json({ result: numbers.add(a, b) });
});

app.get('/numbers/subtract/:a/from/:b', (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.params.b);

  return Number.isNaN(a) || Number.isNaN(b)
    ? res.status(400).json({ error: 'Parameters must be valid numbers.' })
    : res.status(200).json({ result: numbers.subtract(b, a) });
});

app.post('/numbers/multiply', (req, res) => {
  if (req.body.a === undefined || req.body.b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(Number(req.body.a)) || Number.isNaN(Number(req.body.b))) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).json({ result: numbers.multiply(req.body.a, req.body.b) });
  }
});

app.post('/numbers/divide', (req, res) => {
  if (req.body.a === undefined || req.body.b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(Number(req.body.a)) || Number.isNaN(Number(req.body.b))) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else if (req.body.b === Number(0)) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else {
    res.status(200).json({ result: numbers.divide(req.body.a, req.body.b) });
  }
});

app.post('/numbers/remainder', (req, res) => {
  if (req.body.a === undefined || req.body.b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(Number(req.body.a)) || Number.isNaN(Number(req.body.b))) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else if (req.body.b === Number(0)) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else {
    res.status(200).json({ result: numbers.remainder(req.body.a, req.body.b) });
  }
});

app.post('/booleans/negate', (req, res) => {
  res.status(200).json({ result: booleans.negate(req.body.value) });
});

app.post('/booleans/truthiness', (req, res) => {
  res.status(200).json({ result: booleans.truthiness(req.body.value) });
});

app.get('/booleans/is-odd/:number', (req, res) => {
  return Number.isNaN(Number(req.params.number))
    ? res.status(400).json({ error: 'Parameter must be a number.' })
    : res.status(200).json({ result: booleans.isOdd(req.params.number) });
});

app.get('/booleans/:string/starts-with/:char', (req, res) => {
  return req.params.char.length > 1
    ? res.status(400).json({ error: 'Parameter "character" must be a single character.' })
    : res.status(200).json({ result: booleans.startsWith(req.params.char, req.params.string) });
});

app.post('/arrays/element-at-index/:index', (req, res) => {
  res.status(200).json({ result: arrays.getNthElement(req.params.index, req.body.array) });
});

app.post('/arrays/to-string', (req, res) => {
  res.status(200).json({ result: arrays.arrayToCSVString(req.body.array) });
});

app.post('/arrays/append', (req, res) => {
  res.status(200).json({ result: arrays.addToArray2(req.body.value, req.body.array) });
});

app.post('/arrays/starts-with-vowel', (req, res) => {
  res.status(200).json({ result: arrays.elementsStartingWithAVowel(req.body.array) });
});

app.post('/arrays/remove-element', (req, res) => {
  const { index } = req.query;
  const { array } = req.body;

  return index === undefined
    ? res.status(200).json({ result: arrays.removeNthElement2(0, array) })
    : res.status(200).json({ result: arrays.removeNthElement2(Number(index), array) });
});

module.exports = app;
