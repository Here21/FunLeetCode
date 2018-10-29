/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  // 计算0的数量
  let count = 0;
  let arr = [];

  for(let i = 0; i < nums.length; i++) {
    if(nums[i] === 0) {
      count++;
    } else {
      arr.push(nums[i]);
    }
  }
  while(count) {
    count--;
    arr.push(0);
  }
  // 合并
  for(let i = 0; i < nums.length; i++) {
    nums[i] = arr[i];
  }
};