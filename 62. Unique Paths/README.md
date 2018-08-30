# 62. Unique Paths

A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can **only move either down or right** at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

![img](https://leetcode.com/static/images/problemset/robot_maze.png)

(Above is a 7 x 3 grid. How many possible unique paths are there?)

**Note:** m and n will be at most 100.

**Example 1:**

```js
Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Right -> Down
2. Right -> Down -> Right
3. Down -> Right -> Right
```

**Example 2:**

```js
Input: m = 7, n = 3
Output: 28
```

## 解法

其实这道题一看图就明白了。

![img](http://obd9ssud2.bkt.clouddn.com/leetcode.png)

题目中说明“**only move either down or right**”，所以格子中的数字就是走到这个格子的方式数量。会发现`y = 0; x[*] = 1`和`x = 0; y[*] = 1`，之后的路线就是`path[y][x] = path[y - 1][x] + path[y][x - 1]`这个规律。

由于`JS`不能直接创建二维数组，所以先构建一个二维数组，之后遍历计算即可。

```js
// 初始化一个初始数组
const path = [
  [ 1, 1, 1 ],
  [ 1, 0, 0 ],
  [ 1, 0, 0 ],
  [ 1, 0, 0 ]
];

// 遍历计算结果
const path = [
  [ 1, 1, 1 ],
  [ 1, 2, 3 ],
  [ 1, 3, 6 ],
  [ 1, 4, 10 ]
];
```