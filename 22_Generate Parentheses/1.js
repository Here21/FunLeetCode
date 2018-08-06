var generateParenthesis = function(n) {
  const result = [];
  backtrack('', 0, 0, n, result);
  return result;

  function backtrack(str, open, close, max, result){
    // 满足长度
    if(str.length === max * 2) {
      result.push(str);
      return;
    }
    if(open < max) backtrack(str + '(', open + 1, close, max, result);
    if(close < open) backtrack(str + ')', open, close + 1, max, result);
  }
};

console.log(generateParenthesis(3));