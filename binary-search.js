'use strict';

function binarySearch(numbers, n) {
  let leftBound = 0;
  let rightBound = numbers.length;
  let cur = Math.floor((rightBound - leftBound) / 2);

  while (true) {
    if (numbers[cur] > n) {
      rightBound = cur;
    } else if (numbers[cur] < n) {
      leftBound = cur;
    } else {
      return true;
    };

    if (rightBound - leftBound <= 1) {
      if (numbers[leftBound] === n || numbers[rightBound] === n) {
        return true;
      };
      return false;
    };

    cur = Math.floor((rightBound + leftBound) / 2)
  };
};

// Usage
// const nums  = [-1, 3, 5, 8, -16, -12, 2];
// nums.sort((x, y) => x - y);
// console.log(binarySearch(nums, -1));
// console.log(binarySearch(nums, 2));
// console.log(binarySearch(nums, 8));
// console.log(binarySearch(nums, 4));
// console.log(binarySearch(nums, 22));
// console.log(binarySearch(nums, -22));

module.exports = binarySearch;
