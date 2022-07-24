const input = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

//output [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]

function unroll(squareArray) {
  const result = [];
  const size = squareArray.length;

  // variables to track indeces
  let top = 0;
  let bottom = size - 1;
  let left = 0;
  let right = size - 1;
  let dir = 0;

  while (top <= bottom && left <= right) {
    if (dir === 0) {
      for (i = left; i <= right; i++) {
        result.push(squareArray[top][i]);
      }
      top += 1;
    } else if (dir === 1) {
      for (i = top; i <= bottom; i++) {
        result.push(squareArray[i][right]);
      }
      right -= 1;
    } else if (dir === 2) {
      for (i = right; i >= left; i--) {
        result.push(squareArray[bottom][i]);
      }
      bottom -= 1;
    } else if (dir === 3) {
      for (i = bottom; i >= top; i--) {
        result.push(squareArray[i][left]);
      }
      left += 1;
    }

    dir = (dir + 1) % 4;
  }
  return result;
}
console.log(unroll(input));

module.exports = unroll;
