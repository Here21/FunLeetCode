var permuteUnique = function(nums) {
  const set = new Set();
  if(nums === null || nums.length === 0) return [...set];
  nums.sort((a,b) => a - b);
  const used = nums.map(i => false);
  backtracking([]);
  return [...set];
  function backtracking(arr) {
    if(arr.length === nums.length) {
      set.add(arr.slice());
      return ;
    }
    for(let i = 0; i < nums.length; i++) {
      if(used[i] || ((i > 0 && (nums[i] === nums[i - 1])) && !used[i - 1])) continue;
      used[i] = true;
      arr.push(nums[i]);
      backtracking(arr);
      arr.pop();
      used[i] = false;
    }
  }
};

console.log(permuteUnique([1, 1, 2]));
