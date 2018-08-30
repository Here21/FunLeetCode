var minPathSum = function(grid) {
  const Y = grid.length;
  if(Y === 0) {
    return 0;
  }
  const X = grid[0].length;
  for(let i = 0; i < Y; i++) {
    for(let j = 0; j < X; j++) {
      if(i === 0 && j === 0) continue;
      if(i === 0 && j !== 0) {
        grid[i][j] = grid[i][j] + grid[i][j - 1];
      }
      if(i !== 0 && j ===0) {
        grid[i][j] = grid[i][j] + grid[i - 1][j];
      }
      if(i !== 0 && j !== 0) {
        grid[i][j] = Math.min(grid[i - 1][j], grid[i][j - 1]) + grid[i][j];
      }
    }
  }
  return grid[Y - 1][X - 1];
};

const grid = [
  [1,3,1],
  [1,5,1],
  [4,2,1]
]

/*
[ 
  [ 1, 4, 5 ],
  [ 2, 7, 6 ],
  [ 6, 8, 7 ]
]
*/

console.log(minPathSum(grid));
