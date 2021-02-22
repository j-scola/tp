/*
 * @param {string} n
 * @return {number}
 */

// without string conversion
var minPartitions = function (n) {
  let maxInt = 0;
  let remainder = 0;
  while (n) {
    remainder = n % 10; // 2
    if (remainder === 9) {
      return 9;
    }
    if (remainder > maxInt) {
      maxInt = remainder; // 2
    }
    n = n - remainder; // 30
    n = n / 10;
  }
  return maxInt;
};

// with string conversion

var minPartitions = function (n) {
  n = n.toString();
  n = n.split("");
  let maxInt = 0;
  let remainder = 0;
  while (n.length) {
    remainder = parseInt(n[0]) % 10; // 2
    if (remainder === 9) {
      return 9;
    }
    if (remainder > maxInt) {
      maxInt = remainder; // 2
    }
    n.shift();
  }
  return maxInt;
};

let n = "32";
console.log(minPartitions(n));
//Output: 3

n = "82734";
console.log(minPartitions(n));
// Output: 8

n = "27346209830709182346";
console.log(minPartitions(n));
// Output: 9
