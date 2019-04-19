// Two Pointer, 定义两个游标，从两端开始检索区域

var maxArea = function(height) {
  let max = 0;
  let left = 0, right = height.length - 1;
  while(left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    max = Math.max(max, area);
    height[left] <= height[right] ? left++ : right--;
  }
  return max;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))