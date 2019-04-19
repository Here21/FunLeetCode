# 20. Valid Parentheses

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

**Example 1:**

```js
Input: "()"
Output: true
```

**Example 2:**

```js
Input: "()[]{}"
Output: true
```

**Example 3:**

```js
Input: "(]"
Output: false
```

**Example 4:**

```js
Input: "([)]"
Output: false
```

**Example 5:**

```js
Input: "{[]}"
Output: true
```

## 解题

利用栈来实现，一个很取巧的方法。