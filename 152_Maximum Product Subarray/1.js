var maxProduct = function(nums) {
  if(nums === null || nums.length === 0) return 0;

  let max = nums[0], min = nums[0], result = nums[0];

  for(let i = 1; i < nums.length; i++) {
    const maxCur = max * nums[i];
    const minCur = min * nums[i];
    max = Math.max(Math.max(maxCur, minCur, nums[i]));
    min = Math.min(Math.min(maxCur, minCur, nums[i]));
    result = Math.max(max, result);
  }
  return result;
};

const arr = [-2, 2, -2, -3, 1];
console.log(maxProduct(arr));
