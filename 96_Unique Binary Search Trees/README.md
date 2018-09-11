# 96. Unique Binary Search Trees

Given n, how many structurally unique **BST's** (binary search trees) that store values 1 ... n?

**Example:**

```js
Input: 3
Output: 5
Explanation:
Given n = 3, there are a total of 5 unique BST's:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3

```

## 概念

![二叉搜索树](https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Binary_search_tree.svg/300px-Binary_search_tree.svg.png)

[二叉查找树](https://zh.wikipedia.org/wiki/%E4%BA%8C%E5%85%83%E6%90%9C%E5%B0%8B%E6%A8%B9)（英语：Binary Search Tree），也称为二叉搜索树、有序二叉树（ordered binary tree）或排序二叉树（sorted binary tree），是指一棵空树或者具有下列性质的二叉树：

- 若任意节点的左子树不空，则左子树上所有节点的值均小于它的根节点的值；
- 若任意节点的右子树不空，则右子树上所有节点的值均大于它的根节点的值；
- 任意节点的左、右子树也分别为二叉查找树；
- 没有键值相等的节点。

也就是二叉搜索树以根节点为分界线，左边都小于根节点，右边都大于根节点。子树的子集也要遵循这个规律。

## 解法

题目中说明，**that store values 1 ... n?**，也就是说`n`是有序且不重复的，这点很重要。

所以把题目中的解按照根节点重排一下，得到以下序列，然后来寻找规律。也就是找到，当`n = 1`时，会有几种排列结果，当`n = 2`时会有几种排列结果，当`n = 3`时会有几种排列结果。

```js
/*
       1      1          2          3      3
        \      \        / \        /      /
         3      2      1   3      2      1
        /        \               /        \
       2          3             1          2
*/
```

在这里，`n = 3`时的结果有五种（结果符合二叉搜索树），是由以1为根的树有几种子树排列方式，加上以2为根的树有几种子树排列方式，以三为根的树有几种子树排列方式的和的结果。

来展开推到一下：

```js
n = 0;

// 空树，只有一种结果

Count[0] = 1;
```

```js
n = 1;

// 只有一个元素，也就只有一个根，没有子树，只有一种结果

/*
    1
*/

Count[1] =1;
```

```js
n = 2;

// 有两个元素

/*
    1         2
     \       /
      2     1
*/

Count[2] =  Count[0] * Count[1]    // (1为根的情况)
          + Count[1] * Count[0]  // (2为根的情况。

Count[2] = 2;
```

```js
n = 3;

// 有两个元素

/*
       1      1          2          3      3
        \      \        / \        /      /
         3      2      1   3      2      1
        /        \               /        \
       2          3             1          2
*/

Count[3] =  Count[0] * Count[2]   // (1为根的情况)
          + Count[1] * Count[1]  // (2为根的情况)
          + Count[2] * Count[0]  // (3为根的情况)
```

所以，由此观察，可以得出Count的递推公式为`Count[i] = ∑ Count[0...k] * [ k+1....i]     0<=k<i-1`问题至此划归为一维动态规划。

这种数列组合也被成为[卡特兰数](https://zh.wikipedia.org/wiki/%E5%8D%A1%E5%A1%94%E5%85%B0%E6%95%B0)，如果知道卡特兰数，也就很容易推出这个规律。

卡特兰数前20项为（OEIS中的数列A000108）：`1, 1, 2, 5, 14, 42, 132, 429, 1430, 4862, 16796, 58786, 208012, 742900, 2674440, 9694845, 35357670, 129644790, 477638700, 1767263190`