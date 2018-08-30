
// 斐波拉契数列   时间复杂度 O(n) 空间复杂度 O(1)
var climbStairs = function(n) {
  const result = [];
  result[0] = 1;
  result[1] = 1;
  for(let i = 2; i <= n; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }
  return result[n];
};

console.log(climbStairs(3));