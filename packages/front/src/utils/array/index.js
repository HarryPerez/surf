import { SORT_FUNCS } from './constants';

// Receives an array of strings, and returns an obj with that strings as properties with that string as value.
export function stringArrayToObject(namesArray) {
  if (namesArray.some(name => !name || typeof name !== 'string')) {
    throw new Error('Names must be strings and must not be empty');
  }

  const object = Object.fromEntries(namesArray.map(name => [name, name]));
  Object.freeze(object);

  return object;
}

// Receives a length, and returns a new Array with indexes on each position.
export function arrayOfIndexes(length) {
  return Array(length)
    .fill(null)
    .map((_, index) => index);
}

export const isArray = object => object?.constructor?.name === 'Array';

export const lastItemArray = array => array[array.length - 1];

export const isLastItemArray = (array, index) => index === array.length - 1;

const concat = (x, y) => x.concat(y);

export const flatMap = (f, xs) => xs.map(f).reduce(concat, []);

// It returns the updated array if the find result is succes and if not, the original array
export const findAndUpdate = (condition, update, array) => {
  const arrayCopy = [...array];
  const index = array.findIndex(condition);
  if (index === -1) {
    return array;
  }
  arrayCopy[index] = update(arrayCopy[index]);
  return arrayCopy;
};

export const mapObjectKeysToArray = obj => {
  const array = [];
  Object.keys(obj).forEach(key => {
    if (Object.hasOwnProperty.call(obj, key)) {
      array.push(obj[key]);
    }
  });

  return array;
};
export const sum = array => array.reduce((a, b) => a + b, 0);

export const sumBy = (array, func) => sum(array.map(func));

const sort = (func, a, b) => (func(a, b) ? 1 : func(b, a) ? -1 : 0);

// Order should be 'ascendingly' or 'descendingly'
export const sortArrayByOrder = (array, order, key) => {
  const sortFunc = SORT_FUNCS[order];
  return array.sort((a, b) => (key ? sort(sortFunc, a[key], b[key]) : sort(sortFunc, a, b)));
};
export const removeDuplicates = array => Array.from(new Set([...array]));

export const flattened = arr => [].concat(...arr);

export const splitArray = (array, splitFunction) => [
  array.filter(value => splitFunction(value)),
  array.filter(value => !splitFunction(value))
];
