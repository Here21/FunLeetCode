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
    return this.max;
    function searchPal(left, right, s, limit){
      let _temp = 0;
      while (left >= 0 && right <= limit && s.charAt(left) === s.charAt(right)) {
        _temp = s.substr(left, right - left + 1);
        this.max = _temp.length > this.max.length ? _temp : this.max;
        left = left - 1;
        right = right + 1;
      }
    }
};

console.log(longestPalindrome('abdacd'));