var wordBreak = function(s, wordDict) {
  const arr = new Array(s.length + 1).fill(false);
  const dict = new Set(wordDict);
  arr[0] = true;

  for(let i = 1; i<= s.length; i++) {
    for(let j = 0; j < i; j++) {
      if(arr[j] && dict.has(s.substring(j, i))) {
        arr[i] = true;
        break;
      }
    }
  }

  return arr[s.length]
};

const s = "leetcode", wordDict = ["leet", "code"];
console.log(wordBreak(s, wordDict));
