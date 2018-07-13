// 暴力解法
var longestPalindrome = function(s) {
    const limit = s.length - 1;
    this.max = s.substr(0, 1);
    if(s.length === 1) {
      return s;
    }
    if(s.length === 2 && (s.charAt(0 === s.charAt(1)))) {
      return s;
    }
    for (let i = 0; i < limit; i++) {
      // 奇数回文子串
      searchPal(i - 1, i + 1, s, limit)
      // 偶数回文子串
      searchPal(i, i + 1, s, limit)
    }
    // // 偶数回文子串
    // for (let i = 0; i < limit; i++) {
    //   searchPal(i, i + 1, s, limit)
    // }
    return this.max;
    function searchPal(left, right, s, limit){
      let _temp = 0;
      while (left >= 0 && right <= limit && s.charAt(left) === s.charAt(right)) {
        // 可以传入一个数组看看参与比较的回文子串都是什么  list.push(s.substr(left, right - left + 1))
        // _temp = right - left + 1;
        _temp = s.substr(left, right - left + 1);
        this.max = _temp.length > this.max.length ? _temp : this.max;
        left = left - 1;
        right = right + 1;
      }
      // if(_temp > max) return max = 
    }
};

// var longestPalindrome = function(s) {
//   if (s.length < 2) return s;
//   let minStart = 0, maxLen = 1;
//   let curIndex = 0;
//   while (curIndex < s.length) {
//     if (s.length - curIndex < maxLen / 2) break;
//     let j = k = curIndex;
//     while (k < s.length - 1 && s[k+1] === s[k]) ++k; // Skip duplicate characters.
//     curIndex = k + 1;
//     while (k < s.length - 1 && j > 0 && s[k+1] === s[j-1]) {
//       ++k;
//       --j;
//     }
//     let newLen = k - j + 1;
//     if (newLen > maxLen) {
//       minStart = j;
//       maxLen = newLen;
//     }
//   }
//   return s.substr(minStart, maxLen);
// };

console.log(longestPalindrome('abdacd'));