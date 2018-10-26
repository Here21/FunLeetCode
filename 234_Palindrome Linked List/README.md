# 234. Palindrome Linked List


Given a singly linked list, determine if it is a palindrome.

**Example 1:**

```js
Input: 1->2
Output: false
```

**Example 2:**

```js
Input: 1->2->2->1
Output: true
```

**Follow up:**
Could you do it in O(n) time and O(1) space?

## 解法

这道题算是一个综合题目，需要结合之前做过的有关`LinkedList`的方法来解这道题。

基本步骤是：

1. 找到`LinkedList`中点。**(快慢指针)**
2. 反转后半部分。**(链表翻转)**
3. 对比两个链表。