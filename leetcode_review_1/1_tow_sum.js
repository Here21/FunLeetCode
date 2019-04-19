/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

max-inde = 3
length = 4

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1]. 
*/
var twoSum = function(nums, target) {
  let slow = 0;
  let fast = 1;
  let result = 0;
  while (slow < fast) {
    result = target - nums[slow];
    if (nums[fast] === result) {
      return [slow, fast];
    }
    if (fast < nums.length - 1) {
      fast++;
    } else {
      slow++;
      fast = slow + 1;
    }
  }
  return [];
};

console.log(twoSum([2, 7, 11, 15], 9));
