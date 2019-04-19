var permute = function(nums) {
  const result = [];
  if(nums === null || nums.length === 0) {
    return result;
  }
  backtracking(new Set());
  return result;
  function backtracking(list) {
    if(list.size === nums.length) {
      result.push([...list]);
      return;
    }
    for(let i = 0; i < nums.length; i++) {
      if(list.has(nums[i])) continue;
      list.add(nums[i]);
      backtracking(list);
      list.delete(nums[i]);
    }
  }
};

console.log(permute([1,2,3]));
