/**
 * @param {number} n
 * @return {number}
 */

var subtractProductAndSum = function(n) {
  let digits = n.toString();
  let sum = 0;
  let product = 1;
  
  for (var i = 0; i < digits.length; i++) {
    sum += parseInt(digits[i]);
    product *= parseInt(digits[i]);
  }

  return product - sum;
};


// Input: 
let n = 234
console.log(subtractProductAndSum(n));
// Output: 15 
// Explanation: 
// Product of digits = 2 * 3 * 4 = 24 
// Sum of digits = 2 + 3 + 4 = 9 
// Result = 24 - 9 = 15


// Input: 
n = 4421
console.log(subtractProductAndSum(n));
// Output: 21
// Explanation: 
// Product of digits = 4 * 4 * 2 * 1 = 32 
// Sum of digits = 4 + 4 + 2 + 1 = 11 
// Result = 32 - 11 = 21