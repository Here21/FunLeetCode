var subsetsWithDup = function(nums) {
    const set = new Set();
    nums.sort((a,b) => a - b);
    backtracking([], 0);
    return [...set];
    function backtracking(arr, index) {
      // arr.slice() 比展开表达式块
      // set.add([...arr]);
      set.add(arr.slice());
      for(let i = index; i < nums.length; i++) {
        // 剪枝
        if(i > index && nums[i] == nums[i-1]) continue;
        arr.push(nums[i]);
        backtracking(arr, i + 1);
        arr.pop();
      }
    }
};

console.log(subsetsWithDup([0,0,0,0]));