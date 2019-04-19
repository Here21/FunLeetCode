# 题目

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8

## 解题

每个节点的进位问题 => 将进位的数字传给后位相加
两个链表的状态情况得考虑完整 => 注意为空不为空的所有情况
第三位出现进位情况 => 第三位超过 10 则新增一位，并添加进位的数值

链表的概念： (js 创建一条通用链表)[https://aotu.io/notes/2017/10/13/make-a-chain-class/]

## 什么是「链表科普」？

> 链表是一种物理存储单元上非连续、非顺序的存储结构，数据元素的逻辑顺序是通过链表中的指针链接次序实现的。

## 什么是「顺序存储结构科普」？

> 在计算机中用一组地址连续的存储单元依次存储线性表的各个数据元素,称作线性表的顺序存储结构。

多数高级语言的「数组」使用「顺序存储结构」，不过早期的 javascript 引擎用了「链式存储结构」。Chrome 的 V8 的数组使用了「顺序存储结构」与「链式存储结构」混合模式；大多数情况下，V8 下的数组是「顺序存储结构」，所以我们就假装 V8 的数组使用的是「顺序存储结构」
