// Brute Force: 遍历全部的区域，找出最大值

var maxArea = function(height) {
  let max = 0;
  const len = height.length;
  for(let i = 0; i < len; i++) {
    for(let j = 0; j < len; j++) {
      const area = Math.min(height[i], height[j]) * (j - i);
      max = Math.max(max, area);
    }
  }
  return max;
};

console.log(maxArea([1, 0, 0, 0, 1, 7]))