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
  if (num1 == "0" || num2 == "0") {
    return "0";
  }
  let result = "";
  // 遍历num2[i] * num1
  for (let i = num2.length - 1; i >= 0; i--) {
    // const temp = [];
    let temp = "";
    // 补0
    for (let z = num2.length - 1 - i; z > 0; z--) {
      temp += "0";
    }

    // 进位
    let carry = 0;
    // 计算
    for (let j = num1.length - 1; j >= 0; j--) {
      let n = (num1[j] * num2[i] + carry) % 10; // 取余
      temp = n + temp;
      carry = Math.floor((num1[j] * num2[i] + carry) / 10);
    }
    if (carry > 0) {
      temp = carry + temp;
    }
    // 计算相加
    result = addToSum(result, temp);
  }

  return result;

  function addToSum(n1, n2) {
    let carry = 0;
    let sum = "";
    for (
      let i = n1.length - 1, j = n2.length - 1;
      i >= 0 || j >= 0 || carry > 0;
      i--, j--
    ) {
      let a = i < 0 ? 0 : n1.charAt(i) - 0; // 类型转换
      let b = j < 0 ? 0 : n2.charAt(j) - 0; // 类型转换
      let n = (a + b + carry) % 10;
      sum = n + sum;
      carry = Math.floor((a + b + carry) / 10);
    }
    return sum;
  }
};

console.log(multiply("9", "9"));
