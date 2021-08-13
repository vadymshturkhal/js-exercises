/*
Пусть имеется множество S, состоящее из п целых чисел, и отдельное
целое число х необходимо определить, существуют ли во множестве S
два элемента, сумма которых равна х. Разработайте алгоритм решения
этой задачи, время работы которого возрастало бы с увеличением n как
O(nlgn).
*/

const binarySearch = require("./binary-search");

function searchPairSum(nums, requireSum) {
  nums.sort(compare);

  const pair = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (binarySearch(nums, requireSum - num)) {
      if (num !== requireSum - num) {
        pair.push(num, requireSum - num);
        break;
      };

      if (nums[i] === nums[i + 1]) {
        pair.push(num, num);
      }
      break;
    };
  };
  return pair;
};

function compare(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }

  return 0;
}

// Usage

// const nums  = [-1, 3, 5, 8, -16, -12, 2, -1, 1];
// console.log(searchPairSum(nums, 11));
// console.log(searchPairSum(nums, -8));
// console.log(searchPairSum(nums, 0));
// console.log(searchPairSum(nums, -2));
// console.log(searchPairSum(nums, -14));
// console.log(searchPairSum(nums, 6));
// console.log(searchPairSum(nums, 8));
// console.log(searchPairSum(nums, -22));
// console.log(searchPairSum(nums, -18));
// console.log(searchPairSum(nums, 100));

