import { ORDER_OPTIONS } from './constants';

import {
  stringArrayToObject,
  isArray,
  arrayOfIndexes,
  isLastItemArray,
  lastItemArray,
  flatMap,
  sum,
  flattened,
  removeDuplicates,
  splitArray,
  mapObjectKeysToArray,
  findAndUpdate,
  sortArrayByOrder,
  sumBy
} from './index';

describe('array', () => {
  const fiveIndexesArray = arrayOfIndexes(5);
  const oneToThree = arrayOfIndexes(3).map(n => n + 1);
  const oneToFive = fiveIndexesArray.map(n => n + 1);
  const equalsToFIve = num => num === 5;
  const plusThree = num => num + 3;

  it('should be falsy that an object is an array', () => {
    expect(isArray({})).toBeFalsy();
  });
  it('should be falsy that a number is an array', () => {
    expect(isArray(2)).toBeFalsy();
  });
  it('should be truthy that namesArray[index] is equal to that array transformed into an object in that index key', () => {
    const namesArray = ['bootstrap', 'tech', 'ops'];
    expect(Object.keys(stringArrayToObject(namesArray))[0]).toBe(namesArray[0]);
  });
  it('should be truthy that a generated array of indexes has the same length that was pretended to', () => {
    expect(fiveIndexesArray.length).toBe(5);
  });
  it('should be truthy that the first position content of a generated array of indexes is 0', () => {
    expect(fiveIndexesArray[0]).toBe(0);
  });
  it('should be falsy that the second position of a generated array of 5 indexes is the last item', () => {
    expect(isLastItemArray(fiveIndexesArray, 1)).toBeFalsy();
  });
  it('should be truthy that the last item of a generated array of 5 indexes is 4', () => {
    expect(lastItemArray(fiveIndexesArray)).toBe(4);
  });
  it('should be truthy that [1,2,3,4,5] sum is 15', () => {
    expect(sum([1, 2, 3, 4, 5])).toBe(15);
  });
  it('should be truthy that [3,2,1] sorted ascendingly is [1,2,3]', () => {
    expect(sortArrayByOrder([3, 2, 1], ORDER_OPTIONS.ASCENDINGLY)).toStrictEqual(oneToThree);
  });
  it('should be truthy that [25,30,-2,8] sorted descendingly is [30,25,8,-2]', () => {
    expect(sortArrayByOrder([25, 30, -2, 8], ORDER_OPTIONS.DESCENDINGLY)).toStrictEqual([30, 25, 8, -2]);
  });
  it('should be truthy that [-3, 23, 0] sorted ascendingly is [-3, 0, 23]', () => {
    expect(sortArrayByOrder([-3, 23, 0], ORDER_OPTIONS.ASCENDINGLY)).toStrictEqual([-3, 0, 23]);
  });
  it('should be truthy that [1,1,2,2,3,3] removing duplicates is [1,2,3]', () => {
    expect(removeDuplicates([1, 1, 2, 2, 3, 3])).toStrictEqual(oneToThree);
  });
  it('should be truthy that [1,[2,3],4,[5]] flattened is [1,2,3,4,5]', () => {
    expect(flattened([1, [2, 3], 4, [5]])).toStrictEqual(oneToFive);
  });
  it('should be truthy that [1,2,3] flatMapped with [num+1] is [2,3,4]', () => {
    const plusOne = num => [num + 1];
    expect(flatMap(plusOne, oneToThree)).toStrictEqual([2, 3, 4]);
  });
  it('should be truthy that [1,2,3,4,5] splitted by >3 is [[4,5],[1,2,3]]', () => {
    const biggerThanThree = num => num > 3;
    expect(splitArray([1, 2, 3, 4, 5], biggerThanThree)).toStrictEqual([[4, 5], oneToThree]);
  });
  it('should be truthy that an array made by {one:1, two:2} keys is [1,2]', () => {
    expect(mapObjectKeysToArray({ one: 1, two: 2 })).toStrictEqual([1, 2]);
  });
  it('should be updated the index that is 5', () => {
    expect(findAndUpdate(equalsToFIve, plusThree, [2, 3, 4, 5, 6, 7])).toStrictEqual([2, 3, 4, 8, 6, 7]);
  });
  it('should fail trying to update the index that is 5', () => {
    expect(findAndUpdate(equalsToFIve, plusThree, [1, 2, 3])).toStrictEqual([1, 2, 3]);
  });
  it('should be truthy that ["bootstrap", "proceso"] sum by length is 16', () => {
    expect(sumBy(['bootstrap', 'proceso'], word => word.length)).toBe(16);
  });
});
