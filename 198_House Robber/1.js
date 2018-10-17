var rob = function(nums) {
  let maxA = 0, maxB = 0;
  for(let i = 0; i < nums.length; i++) {
    if(i % 2 === 0) {
      maxA = Math.max(maxA + nums[i], maxB);
    } else {
      maxB = Math.max(maxB + nums[i], maxA);
    }
  };
  return Math.max(maxA, maxB); 
};

console.log(rob([2, 1, 1, 2]))