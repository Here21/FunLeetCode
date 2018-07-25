# 11. Container With Most Water

Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.

!['chart'](https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg)

The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Example:

```js
Input: [1,8,6,2,5,4,8,3,7]
Output: 49
```

## 解法

这道题官方给出的难度评级是**Medium**，但是我认为这道题差不多是**easy**。

总的来说还是简单的，刚拿到手的思路就是暴力解法，循环一遍全部的区域，找出那个最大的区域即可。需要两层循环去遍历，时间复杂度是O(n*2)

参考了官方的solution，发现用双游标做法更好一点，时间复杂度将为O(n)
