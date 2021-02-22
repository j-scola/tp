var kidsWithCandies = function (candies, extraCandies) {
  // iterate over candies
  // find greatest amount

  // iterate again
  // compare difference

  const greatest = candies.reduce((acc, curr) => {
    return acc > curr ? acc : curr;
  }, 0);

  return candies.map(candy => {
    return candy + extraCandies >= greatest;
  });
};

var kidsWithCandies = function (candies, extraCandies) {
  const greatest = candies.reduce((acc, curr) => (acc > curr ? acc : curr));
  return candies.map(candy => candy + extraCandies >= greatest);
};

let candies = [2, 3, 5, 1, 3];
let extraCandies = 3;
console.log(kidsWithCandies(candies, extraCandies));
//Output: [true,true,true,false,true]

candies = [4, 2, 1, 1, 2];
extraCandies = 1;
console.log(kidsWithCandies(candies, extraCandies));
// Output: [true, false, false, false, false];
