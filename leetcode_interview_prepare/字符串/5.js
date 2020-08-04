/*
翻转字符串里的单词
给定一个字符串，逐个翻转字符串中的每个单词。

示例 1：

输入: "the sky is blue"
输出: "blue is sky the"
示例 2：

输入: "  hello world!  "
输出: "world! hello"
解释: 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
示例 3：

输入: "a good   example"
输出: "example good a"
解释: 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。
 

说明：

无空格字符构成一个单词。
输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。
 

进阶：

请选用 C 语言的用户尝试使用 O(1) 额外空间复杂度的原地解法。
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let result = "";
  let word = "";
  // s = s.trim();
  for (let i = 0; i < s.length; i++) {
    // 开始的空格
    if (s[i].charCodeAt() === 32 && !word) {
      continue;
    }
    // 中间的空格
    if (
      s[i].charCodeAt() === 32 &&
      result &&
      result[result.length - 1].charCodeAt() === 32
    ) {
      continue;
    }
    if (s[i].charCodeAt() !== 32) {
      word += s[i];
    }
    if (s[i].charCodeAt() === 32) {
      result = result ? word + s[i] + result : word;
      word = "";
    }
  }
  return word + " " + result;
};

console.log(`--${reverseWords("the sky is blue")}--`);
console.log(`--${reverseWords("  hello world!  ")}--`);
