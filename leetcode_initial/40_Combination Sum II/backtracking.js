var combinationSum2 = function(candidates, target) {
  candidates.sort((a,b) => a - b);
  const result = [];
  backtracking(target, 0, []);
  return result;
  function backtracking(target, index, arr) {
    if (target < 0) return;
    if(target === 0) {
      result.push(arr.slice());
    }
    for(let i = index; i < candidates.length; i++) {
      if(i > index && candidates[i] === candidates[i - 1]) continue;
      arr.push(candidates[i]);
      backtracking(target - candidates[i], i + 1, arr);
      arr.pop();
    }
  };
};

console.log(combinationSum2([2,5,2,1,2], 0));