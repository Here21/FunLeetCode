var uniquePaths = function(m, n) {
  const arr = [];
  // 构建二维数组
  for(let y = 0; y < n; y++) {
    let row = [];
    for(let x = 0; x < m; x++) {
      if(y === 0) {
        row.push(1);
        continue;
      } else if(x === 0) {
        row.push(1);
        continue;
      }
      row.push(0);
    }
    arr.push(row);
  }
  
  for(let y = 1; y < n; y++) {
    for(let x = 1; x < m; x++) {
      arr[y][x] = arr[y-1][x] + arr[y][x-1];
    }
  }
  return arr[n - 1][m - 1];
};

console.log(uniquePaths(7, 3));
