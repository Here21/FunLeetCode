/*
给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:

输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // 边界
  if (s.length <= 1) {
    return s.length;
  }
  let fast = 1;
  let slow = 0;
  let max = 0;
  while (fast <= s.length) {
    const str = s.substring(slow, fast);
    max = Math.max(max, fast - slow);

    if (str.indexOf(s[fast]) >= 0) {
      // 有重复
      slow += 1;
    } else {
      fast += 1;
    }
  }
  return max;
};

// 方法2

// 方法3
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring(" "));
console.log(lengthOfLongestSubstring("au"));
