/*
# 3. Longest Substring Without Repeating Characters

Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/

function lengthOfLongestSubstring(s) {
  // 判断边界
  if (!s) return 0;
  if (s.length === 1) return 1;

  let index = 0;
  let max = 0;
  let str = "";

  for (let i = 0; i < s.length; i++) {
    // 检查str中是否有重复
    index = str.indexOf(s[i]);
    console.log("-i-", i, "-index-", index, "-str-", str, "-max-", max);

    if (index === -1) {
      str += s[i];
      max = Math.max(max, str.length);
    } else {
      console.log(str, index);
      str = str.substring(index + 1);
    }
  }

  return max;
}

console.log(lengthOfLongestSubstring("dedf"));
