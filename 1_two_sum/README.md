# TWO SUM
## 题目
> Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
```
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```
## 题意
**来自于网络**

给定一个数组和一个目标值，如果数组中的两个数字相加可以与目标值相等，则返回这两个数在该数组中的位置坐标。输出的要求：1、坐标较小的放在前面，较大的放在后面。2、这俩坐标不能为零。
分析：

根据题意，我们可以提取出以下三点关键信息：
* 求出来的坐标值要按升序排列 => 做排序
* 有且只有一组答案符合要求 => 找到符合条件的两个数存入，终止程序，返回答案即可。
* 涉及到的数据都是键值对(key,value) => 数据类型Map

## 解法一
### 思路
简单粗暴，遍历执行输出，零时的局部变量，属于增强版for循环，具体对比请看[JS几种数组遍历方式以及性能分析对比](https://dailc.github.io/2016/11/25/baseKnowlenge_javascript_jsarrayGoThrough.html)

[code](./two_sum_01.js)
