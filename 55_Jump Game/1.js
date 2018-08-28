var canJump = function(nums) {
  const len = nums.length;
  let max = 0;
  for(let i = 0; i < len; i++) {
    if(i > max) return false;
    console.log(max);
    max = Math.max(nums[i] + i, max);
  }
  return true;
};

console.log(canJump([2,1,1,0,4]));