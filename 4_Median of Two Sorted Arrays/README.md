# 4. Median of Two Sorted Arrays

There are two sorted arrays **nums1** and **nums2** of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be **O(log (m+n))**.

**Example 1:**

```js
nums1 = [1, 3]
nums2 = [2]
```

The median is 2.0
Example 2:

```js
nums1 = [1, 2]
nums2 = [3, 4]
The median is (2 + 3)/2 = 2.5
```

# 解题
这道题乍一看不算是难题，只需要将两个数组合并，然后找到中间数即可。但是最后题目要求了时间复杂度`O(log (m+n))`，这个就比较复杂了。

一般出现`O(log m)`就要要才去二分法了，先不考虑时间复杂度条件来实现一下。