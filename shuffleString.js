/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
  let resultArray = [];

  indices.forEach((int, index) => {
    resultArray[int] = s[index];
  });

  return resultArray.join('');
  
};


// Input: 

let s = "codeleet";
let indices = [4,5,6,7,0,2,1,3];
console.log(restoreString(s, indices));
// Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.


// Input: 
s = "abc";
indices = [0,1,2];
console.log(restoreString(s, indices));
// Output: "abc"
// Explanation: After shuffling, each character remains in its position.


// Input: 
s = "aiohn";
indices = [3,1,4,2,0];
console.log(restoreString(s, indices));

// Output: "nihao"

// Input: 
s = "aaiougrt";
indices = [4,0,2,6,7,3,1,5];
// Output: "arigatou"

// Input: 
s = "art";
indices = [1,0,2];
console.log(restoreString(s, indices));
// Output: "rat"
