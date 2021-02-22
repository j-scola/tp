var numJewelsInStones = function (jewels, stones) {
  const map = {};
  let count = 0;
  let i = jewels.length;
  while (i) {
    map[jewels[i - 1]] = true;
    i--;
  }
  i = stones.length;
  while (i) {
    if (map[stones[i - 1]]) {
      count++;
    }
    i--;
  }
  return count;
};

var numJewelsInStones = function (jewels, stones) {
  let count = 0;

  i = stones.length;
  while (i) {
    let j = jewels.length;
    while (j) {
      if (stones[i - 1] === jewels[j - 1]) {
        count++;
        break;
      }
      j--;
    }
    i--;
  }
  return count;
};

let jewels = "aA";
let stones = "aAAbbbb";
console.log(numJewelsInStones(jewels, stones));
// Output: 3

Input: (jewels = "z"), (stones = "ZZ");
console.log(numJewelsInStones(jewels, stones));
// Output: 0
