// 完全做错，审题不仔细啊！

var searchRange = function(nums, target) {
  let result = new Set();
  binarySearch(0, nums.length - 1);
  const arr = [...result]
  // 错误的思路
  // if(arr.length === 1) {
  //   return [arr[0], arr[0]];
  // } else if(arr.length < 1) {
  //   return [-1, -1];
  // }
  // return arr;
  if(arr.length < 1) {
    return [-1, -1];
  }
  return [arr[0], arr[arr.length - 1]];
  
  function binarySearch(start, end) {
    let mid = Math.floor(((end - start) / 2) + start);
    // [...] 两端开区间
    if(mid > 0 && nums[start] <= target && target <= nums[mid]) {
      binarySearch(start, mid - 1)
    }
    // (...] 左闭右开区间
    if(nums[mid] < target && target <= nums[end]) {
      binarySearch(mid + 1, end);
    }
    while(nums[mid] === target && mid < nums.length) {
      result.add(mid);
      mid++;
    }
  }
};

console.log(searchRange([3, 3, 3, 3], 3))