var sortColors = function(nums) {
  if(nums.length < 1) return;
  let left = 0;
  let right = nums.length - 1;
  let index = 0;

  while(index <= right) {
    if(nums[index] === 0) {
      swap(index++, left++);
    } else if(nums[index] === 1) {
      index ++;
    } else {
      swap(index, right--);
    }
  }
  // console.log(nums);
  function swap(left, right) {
    const temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;
  }
};

console.log(sortColors([2,0,1]));