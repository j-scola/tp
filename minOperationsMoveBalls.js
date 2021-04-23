/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    // solution 1
    // let boxArray = boxes.split('');
    // return boxArray.map((num, idx, arr) => {
    //   let sum = 0;
    //   arr.forEach((box, arrIdx) => {
    //     if (box === '1') {
    //       sum += Math.abs(idx - arrIdx) 
    //     }
    //   })
    //   return sum;
    // })

    // solution 2
    const solution = [];
    for (var i = 0; i < boxes.length; i++) {
      let sum = 0;
      for (var j = 0; j < boxes.length; j++) {
        if (boxes[j] === '1') {
          sum += Math.abs(i - j) 
        }
      }
      solution.push(sum)
    }
    return solution 
};


// Example 1:

// Input: 
let boxes = "110"
console.log(minOperations(boxes));
// Output: [1,1,3]
// Explanation: The answer for each box is as follows:
// 1) First box: you will have to move one ball from the second box to the first box in one operation.
// 2) Second box: you will have to move one ball from the first box to the second box in one operation.
// 3) Third box: you will have to move one ball from the first box to the third box in two operations, and move one ball from the second box to the third box in one operation.
// Example 2:

// Input: 
boxes = "001011"
console.log(minOperations(boxes));
// Output: [11,8,5,4,3,4]