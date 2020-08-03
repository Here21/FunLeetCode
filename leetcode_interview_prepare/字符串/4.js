/*
字符串相乘
给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

示例 1:

输入: num1 = "2", num2 = "3"
输出: "6"
示例 2:

输入: num1 = "123", num2 = "456"
输出: "56088"
说明：

num1 和 num2 的长度小于110。
num1 和 num2 只包含数字 0-9。
num1 和 num2 均不以零开头，除非是数字 0 本身。
不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。
*/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  const resultList = [];
  // 遍历num2[i] * num1
  for (let i = num2.length - 1; i > 0; i--) {
    const temp = [];
    // 补0
    for (let z = num2.length - 1 - i; z > 0; z--) {
      temp.push(0);
    }

    // 进位
    let carry = 0;
    // 计算
    for (let j = num1.length - 1; j > 0; j--) {}
  }
};
