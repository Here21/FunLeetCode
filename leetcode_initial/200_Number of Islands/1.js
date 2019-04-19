var numIslands = function(grid) {
  if(grid.length <= 0) return 0;
  let height = grid.length;
  let width = grid[0].length;
  let answer = 0;

  for(let y = 0; y < height; y++) {
    for(let x = 0; x < width; x++) {
      if(grid[y][x] === '1') {
        answer = answer + 1;
        helper(x, y, height, width);
      }
    }
  }
  return answer;

  function helper(x, y, h, w) {
    if(x < 0 || y < 0 || x >= w || y >= h || grid[y][x] === '0') return;
    
    grid[y][x] = '0';
    helper(x - 1, y, h, w);
    helper(x + 1, y, h, w);
    helper(x, y - 1, h, w);
    helper(x, y + 1, h, w);
  }
};

const grid = [
  ['1', '1', '1', '0', '0'],
  ['1' ,'1' ,'0', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['0', '0', '1', '0', '1']
]

console.log(numIslands(grid));
