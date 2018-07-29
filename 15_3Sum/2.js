var threeSum = function(nums) {
  const arr = nums.sort((a, b) => a - b);
  console.log(arr);
  const result = [];
  for(let left = 0; left < nums.length - 2; left++) {
    // 加快左标，如果有相同左标跳过，相当于除重
    if (left == 0 || (left > 0 && nums[left] != nums[left-1])) {
      let mid = left + 1, right = nums.length - 1, rest = 0 - nums[left];
      while(mid < right) {
        // 判断中标底数和右标底数是否等于rest的数值
        if((nums[mid] + nums[right]) === rest) {
          result.push([nums[left], nums[mid], nums[right]])
          // 中标移动除重
          while (nums[mid] === nums[mid + 1]) {
            mid++;
          }
          // 右标移动除重
          while (nums[right] === nums[right - 1]) {
            right--;
          }
          mid++;
          right--;
        } else if((nums[mid] + nums[right]) < rest) {
          mid++;
        } else {
          right--;
        }
      }
    }
  }
  return result;
};

console.log(threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]));
