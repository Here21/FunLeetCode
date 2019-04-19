// backtracking 记忆化递归
var climbStairs = function(n) {
  const f = new Array(n).fill(0)
  return backtracking(n);

  function backtracking(n) {
    if(n < 2) return 1;
    // 记住已经计算过的答案
    if(f[n] > 0) return f[n];
    f[n] = backtracking(n - 1) + backtracking(n - 2);
    return f[n];
  }
};

console.log(climbStairs(4));