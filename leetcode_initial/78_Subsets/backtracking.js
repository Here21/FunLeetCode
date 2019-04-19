var subsets = function(nums) {
  const result = new Set();
  nums.sort((a, b) => a - b);
  backtracking([], 0);
  return [...result];
  function backtracking(arr, index) {
    result.add([...arr]);
    for(let i = index; i < nums.length; i++) {
      arr.push(nums[i]);
      backtracking(arr, i + 1);
      arr.pop();
    }
  }
};

console.log(subsets([]));