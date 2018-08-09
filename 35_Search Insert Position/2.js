var searchInsert = function(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  // start <= end ---> s = 0, e = 0, target > nums[end]
  while(start <= end) {
    let mid = Math.floor((end - start) / 2 + start);
    if(nums[start] > target) return start;
    if(nums[end] < target) return end + 1;
    if(nums[mid] === target) return mid

    if(target < nums[mid]) {
      end = mid - 1;
    } else if(target > nums[mid]) {
      start = mid + 1;
    }
  }
  return start;
};

console.log(searchInsert([1,3,5,6], 2));