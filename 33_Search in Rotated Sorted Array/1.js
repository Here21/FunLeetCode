var search = function(nums, target) {
  if(nums.length < 1) return -1;
  if(nums.length === 1 && nums[0] === target) return 0;
  let start = 0;
  let end = nums.length - 1;

  while(start < end) {
    let mid = Math.floor((end - start) / 2 + start);
    if(nums[mid] === target) return mid;
    if(nums[start] === target) return start;
    if(nums[end] === target) return end;
    // 如果target在前半段
    // [7, 8, 3, 4, 5, 6] nums[start] < nums[mid]会丢失另一半
    // if(nums[start] < nums[mid] && (nums[start] < target && target < nums[mid])) {
    //   end = mid - 1;
    // } else { // 如果target在后半段
    //   start = mid + 1;
    // }

    if(nums[start] < nums[mid]) {
      if(nums[start] < target && target < nums[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if(nums[mid] < target && target < nums[end]) {
        start = mid + 1
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
};

console.log(search([4,5,6,7,0,1,2], 0));