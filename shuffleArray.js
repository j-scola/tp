/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  let array = [];
  while (n >= 0) return array;
};

let nums = [2, 5, 1, 3, 4, 7];
let n = 3;
console.log(shuffle(nums, n));
// Output: [2,3,5,4,1,7]

nums = [1, 2, 3, 4, 4, 3, 2, 1];
n = 4;
console.log(shuffle(nums, n));
//Output: [1,4,2,3,3,2,4,1]

nums = [1, 1, 2, 2];
n = 2;
console.log(shuffle(nums, n));
//Output: [1,2,1,2]
