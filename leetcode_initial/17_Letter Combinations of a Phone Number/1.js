// Approach 1: DFS（深度优先算法）

var letterCombinations = function(digits) {
  if (digits.length < 1) return [];
  const arrMap = [
    [' '],
    [''],
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l'],
    ['m', 'n', 'o'],
    ['p', 'q', 'r', 's'],
    ['t', 'u', 'v'],
    ['w','x','y','z']
  ];
  const result = [];

  DFS(digits, 0, '')

  return result;

  function DFS(digits, deep, cur) {
    if(deep > (digits.length - 1)) {
      result.push(cur);
      return cur.slice()
    }
    for(let i = 0; i < arrMap[digits[deep]].length; i++) {
      cur = cur + arrMap[digits[deep]][i];
      DFS(digits, deep + 1, cur);
      cur = cur.slice(0, cur.length - 1);
    }
  }
};

console.log(letterCombinations('23'));