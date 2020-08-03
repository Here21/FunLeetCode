/**
最长公共前缀

编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1:

输入: ["flower","flow","flight"]
输出: "fl"
示例 2:

输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
说明:

所有输入只包含小写字母 a-z 。
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // 入参边界
  if (strs.length < 1) {
    return "";
  }
  let arr = [];
  let index = 0;
  let going = true;
  while (going) {
    strs.forEach((item, i) => {
      // first
      if (i === 0) {
        // 边界
        const temp = item ? item[index] : null;
        if (!temp) {
          going = false;
          return;
        }
        arr.push(temp);
      }
      // after
      if (i !== 0 && item[index] !== arr[index]) {
        // 无公共前缀，退出
        going = false;
        // 清空本轮
        arr.splice(index);
        return;
      }
    });
    // 增加游标
    index += 1;
  }
  return arr.join("");
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["f", "fff", "ffffffff"]));
console.log(longestCommonPrefix([]));
console.log("--->", longestCommonPrefix(["abca", "aba", "aaab"]));
