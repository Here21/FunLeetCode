var findKthLargest = function(nums, k) {
  if(nums === null || nums.length === 0) return 0;

  let left = 0, right = nums.length - 1;

  while(true) {
    let pos = partition(nums, left, right);
    if(pos + 1 === k) {
      return nums[pos];
    } else if(pos + 1 > k) {
      right = pos - 1;
    } else {
      left = pos + 1;
    }
  }
  
  function partition(nums, left, right) {
    let pivot = nums[left];
    let l = left + 1, r = right;

    while(l <= r) {
      if(nums[l] < pivot && nums[r] > pivot) {
        swap(nums, l++, r--);
      }
      if(nums[l] >= pivot) l++;
      if(nums[r] <= pivot) r--;
    }

    swap(nums, left, r);
    return r;
  }

  function swap(nums, l, r) {
    let temp = nums[l];
    nums[l] = nums[r];
    nums[r] = temp;
  }
};

console.log(findKthLargest([3,2,1,5,6,4], 2))