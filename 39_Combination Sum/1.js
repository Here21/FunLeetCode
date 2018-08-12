// dfs
var combinationSum = function(candidates, target) {
    const cur = [];
    const result = [];
    candidates.sort((a, b) => a - b);
    DFS(target, 0);
    return result;

    function DFS(target, curIndex) {
      if(target === 0) {
        // [...cur]相当于 result.push(new Array()) 防止cur.pop()清除该引用的值
        // [...cur] 速度 116ms   cur.slice() 速度 82ms
        
        // result.push(cur.slice());
        result.push([...cur]);
        return;
      }

      for(let i = curIndex; i < candidates.length; i++) {
        if(candidates[i] > target) break;
        cur.push(candidates[i]);
        DFS(target - candidates[i], i);
        cur.pop();
      }
    }
};

console.log(combinationSum([2,3,6,7], 7))