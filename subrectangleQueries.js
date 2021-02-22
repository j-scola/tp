/*
 * @param {number[][]} rectangle
 */
var SubrectangleQueries = function (rectangle) {
  this.matrix = rectangle;
};

/*
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @param {number} newValue
 * @return {void}
 */
SubrectangleQueries.prototype.updateSubrectangle = function (
  row1,
  col1,
  row2,
  col2,
  newValue
) {
  for (var i = row1; i <= row2; i++) {
    for (var j = col1; j <= col2; j++) {
      this.matrix[i][j] = newValue;
    }
  }
};

/*
 * @param {number} row
 * @param {number} col
 * @return {number}
 */
SubrectangleQueries.prototype.getValue = function (row, col) {
  return this.matrix[row][col];
};

SubrectangleQueries.prototype.print = function () {
  console.log(this.matrix);
};

/**
 * Your SubrectangleQueries object will be instantiated and called as such:
 * var obj = new SubrectangleQueries(rectangle)
 * obj.updateSubrectangle(row1,col1,row2,col2,newValue)
 * var param_2 = obj.getValue(row,col)
 */

console.log("should print 1, 2, 3, 4 for 2x2 matrix");
const test1 = new SubrectangleQueries([
  [1, 2],
  [3, 4],
]);
test1.print();
console.log("--------------------------------");

console.log("should print matrix values 1 through 4");
console.log(test1.getValue(0, 0));
console.log(test1.getValue(0, 1));
console.log(test1.getValue(1, 0));
console.log(test1.getValue(1, 1));
console.log("--------------------------------");

console.log("should update last value to 1");
test1.updateSubrectangle(1, 1, 1, 1, 1);
console.log(test1.getValue(0, 0));
console.log(test1.getValue(0, 1));
console.log(test1.getValue(1, 0));
console.log(test1.getValue(1, 1));
console.log("--------------------------------");

console.log("should update all to 4");
test1.updateSubrectangle(0, 0, 1, 1, 4);
console.log(test1.getValue(0, 0));
console.log(test1.getValue(0, 1));
console.log(test1.getValue(1, 0));
console.log(test1.getValue(1, 1));
console.log("--------------------------------");
