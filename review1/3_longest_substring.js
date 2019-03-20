/*
# 3. Longest Substring Without Repeating Characters

Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/

function lengthOfLongestSubstring(s) {
  let left = 0,
    right = 1;
  let max = 0;
  let set = new Set();
  while (left <= s.length - 1) {
    set.add(s[left]);
    console.log(left, right, set);

    if (s[right] && !set.has(s[right])) {
      set.add(s[right]);
      right += 1;
    } else {
      max = Math.max(set.size, max);
      set.clear();

      left += 1;
      right = left + 1;
    }
  }
  return max;
}

console.log(lengthOfLongestSubstring("peekew"));
