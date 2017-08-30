'use strict';

var twoSum = function(nums, target) {
  for(let j = 0, len = nums.length; j < len; j++) {
    for(let i = j + 1; i < nums.length; i++){
      if(nums[j] + nums[i] == target) {
        return [j, i];
      }
    }
  }
};

console.log(twoSum([1,2,3,4,6], 8));