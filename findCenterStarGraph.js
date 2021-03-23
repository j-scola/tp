/**
 * @param {number[][]} edges
 * @return {number}
 */

var findCenter = function(edges) {
  if (edges[0].includes(edges[1][0])) {
    return edges[1][0]
  } else {
    return edges[1][1]
  }
};

// Input: 
let edges = [[1,2],[2,3],[4,2]];
console.log(findCenter(edges));
// Output: 2
// Explanation: As shown in the figure above, node 2 is connected to every other node, so 2 is the center.
// Example 2:

// Input: 
edges = [[1,2],[5,1],[1,3],[1,4]];
console.log(findCenter(edges));
// Output: 1