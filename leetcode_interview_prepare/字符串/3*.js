/*
字符串的排列
给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的排列。

换句话说，第一个字符串的排列之一是第二个字符串的子串。

示例1:

输入: s1 = "ab" s2 = "eidbaooo"
输出: True
解释: s2 包含 s1 的排列之一 ("ba").
 

示例2:

输入: s1= "ab" s2 = "eidboaoo"
输出: False
 

注意：

输入的字符串只包含小写字母
两个字符串的长度都在 [1, 10,000] 之间
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// 思路不对，没有考虑到重复问题。
var checkInclusion_wrong = function (s1, s2) {
  let pointer = 0;
  let marker = 0;
  // 存储s1的空间
  let container = s1.split("");
  let bin = [];
  while (container.length !== 0 && pointer <= s2.length) {
    // console.log("--->", container, s2[pointer]);

    // 如果存在container中
    if (container.indexOf(s2[pointer]) !== -1) {
      console.log(s2[pointer]);
      // 之前没用过
      const i = container.splice(container.indexOf(s2[pointer]), 1);
      bin.push(i[0]);
      pointer += 1;
      continue;
    }
    // 使用过
    if (bin.indexOf(s2[pointer]) !== -1) {
    }
    // 如果不存在container中
    if (container.indexOf(s2[pointer]) === -1) {
      container = s1.split(""); // reset
      pointer += 1;
    }
  }
  return container.length === 0;
};

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  // 滑动视窗
  let s1Len = s1.length;
  let winSize = s2.length - s1Len;
  let s1Str = s1.split("").sort().join("");
  for (let i = 0; i <= winSize; i++) {
    if (
      s1Str ===
      s2
        .substring(i, s1Len + i)
        .split("")
        .sort()
        .join("")
    )
      return true;
  }
  return false;
};

// console.log(checkInclusion("ab", "eidboaoo"));
// console.log(checkInclusion("", "eidboaoo"));
// console.log(checkInclusion("", ""));
// console.log(checkInclusion("abcdef", "abc"));
console.log(checkInclusion("abc", "dcba"));

// 最快解
var checkInclusion = function (s1, s2) {
  const getCode = (s) => s.charCodeAt() - 97;

  const count = new Array(26).fill(0);
  for (let i = 0; i < s1.length; i++) {
    count[getCode(s1[i])]++;
  }
  let left = 0;
  let right = 0;
  while (right < s2.length) {
    const c = s2[right++];

    count[getCode(c)]--;

    while (left < right && count[getCode(c)] < 0) {
      count[getCode(s2[left++])]++;
    }
    if (right - left === s1.length) {
      return true;
    }
  }
  return false;
};
