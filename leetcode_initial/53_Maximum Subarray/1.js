var maxSubArray = function(nums) {
  const dp = [];
  dp[0] = nums[0];
  let max = nums[0];
  const len = nums.length;
  for(let i = 1; i < len; i++) {
    // [-2, 1, -2, 4, 3, 5, 6, 1, 5]
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    max = Math.max(dp[i], max);
  }
  console.log(dp);
  return max;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
