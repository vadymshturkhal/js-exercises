/*
Пусть имеется множество S, состоящее из п целых чисел, и отдельное
целое число х необходимо определить, существуют ли во множестве S
два элемента, сумма которых равна х. Разработайте алгоритм решения
этой задачи, время работы которого возрастало бы с увеличением n как
O(nlgn).
*/

const binarySearch = require("./binary-search");

function searchPairSum(nums, requireSum) {
  nums.sort((x, y) => x - y);

  const pair = [];

  for (let num of nums) {
    if (binarySearch(nums, requireSum - num) && num !== requireSum - num) {
      pair.push(num, requireSum - num);
      break;
    };
  };

  return pair;
};

// Usage
// const nums  = [-1, 3, 5, 8, -16, -12, 2];
// console.log(searchPairSum(nums, 11));
// console.log(searchPairSum(nums, -8));
// console.log(searchPairSum(nums, -14));
// console.log(searchPairSum(nums, -22));
// console.log(searchPairSum(nums, 0));
// console.log(searchPairSum(nums, 6));
// console.log(searchPairSum(nums, 16));
