var searchRange = function(nums, target) {
  const result = [-1, -1];

  for(let i = 0; i < nums.length; i++) {
    if(nums[i] === target) {
      result[0] = i;
      break;
    }
  }

  if(!result[0]) {
    return result;
  }

  for(let j = nums.length - 1; j > 0; j--) {
    if(nums[j] === target) {
      result[1] = j;
      break;
    }
  }
  return result;
};

console.log(searchRange([1, 2, 3, 3, 3], 3))