# 48. Rotate Image

You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

**Note:**

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. **DO NOT** allocate another 2D matrix and do the rotation.

**Example 1:**

```js
Given input matrix =
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

rotate the input matrix in-place such that it becomes:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
```

**Example 2:**

```js
Given input matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
],

rotate the input matrix in-place such that it becomes:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]
```

## 解法

刚开始没什么思路，看了Discuss里别人的解法，恍然大明白。原来*旋转*可以通过*对折*来实现。

```js
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

// 矩阵沿对角线[0,0] - [length-1, length-1]进行对折
[
  [1,4,7],
  [2,5,8],
  [3,6,9]
]

// 矩阵垂直中轴线对折
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
```
