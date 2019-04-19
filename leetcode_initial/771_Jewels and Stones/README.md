# 771. Jewels and Stones

You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

**Example 1:**

```js
Input: J = "aA", S = "aAAbbbb"
Output: 3
```

**Example 2:**

```js
Input: J = "z", S = "ZZ"
Output: 0
```

**Note:**

S and J will consist of letters and have length at most 50.
The characters in J are distinct.

## 解法

### 解法一

利用`HashSet`去做，去遍历`S`。

值得注意的是：
`JavaScript` 原有的`for...in`循环，**只能获得对象的键名**，不能直接获取键值。`ES6` 提供`for...of`循环，允许遍历获得键值。

```js
var arr = ['a', 'b', 'c', 'd'];

for (let a in arr) {
  console.log(a); // 0 1 2 3
}

for (let a of arr) {
  console.log(a); // a b c d
}
```

### 解法二

这个就比较取巧了，最先想到的就是`Set`，提交之后看到排名第一的答案是利用`indexOf()`。

> The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

```js
var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1

```