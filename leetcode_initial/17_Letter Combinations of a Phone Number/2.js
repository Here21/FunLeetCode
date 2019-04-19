// Approach 1: BFS（广度优先算法）

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

  let result = [''];

  for(let i = 0; i < digits.length; i++) {
    const temp = [];
    for(let j = 0; j < result.length; j++) {
      const strArr = arrMap[digits[i]];
      for(let k = 0; k < strArr.length; k++) {
        const ss = result[j] + strArr[k];
        temp.push(ss);
      }
    }
    result = temp;
  }
  return result;
};

console.log(letterCombinations('235'));