var rotate = function(matrix) {
  const len = matrix.length;
  for(let y = 0; y < len; y++) {
    // x = y，矩阵沿对角线[0,0][length-1, length-1]翻转
    for(let x = y; x < len; x++) {
      const temp = matrix[y][x];
      matrix[y][x] = matrix[x][y];
      matrix[x][y] = temp;
    }
  }
  const half = Math.floor(len / 2);
  for(let y = 0; y < len; y++) {
    for(let x = 0; x < half; x++) {
      const temp = matrix[y][x];
      matrix[y][x] = matrix[y][len - 1 - x];
      matrix[y][len - 1 - x] = temp;
    }
  }
};

const matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];
rotate(matrix);
console.log(matrix);