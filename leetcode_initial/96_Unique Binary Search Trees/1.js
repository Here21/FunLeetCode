var numTrees = function(n) {
  // 初始数组注意边界是 n + 1
  const count = new Array(n + 1).fill(0)
  count[0] = 1;
  count[1] = 1;

  // 注意边界
  for(let i = 2; i <= n; i++) {
    for(let j = 0; j < i; j++) {
      count[i] += count[j] * count[i - j - 1];
    }
  }
  return count[n];
};

console.log(numTrees(3));