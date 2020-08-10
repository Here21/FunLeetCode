/*
三数之和
给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。

 

示例：

给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let result = [];
  // 先排序
  nums.sort((a, b) => a - b);

  if (nums[0] <= 0 || nums[length - 1] >= 0) {
    // 只有当最左边与最右边符号不同，才可以继续逻辑
    // 选择C位
    for (let i = 0; i < nums.length - 2; ) {
      // i 为最左边位
      if (nums[i] > 0) break; // 如果左边为在排序情况下，> 0 则此时右边全为正，符号相同;

      let first = i + 1;
      let last = nums.length - 1;

      while (first < last) {
        // 执行逻辑
        const temp = nums[i] + nums[first] + nums[last];
        console.log("--->", temp, first, last);

        if (temp === 0) {
          // 成功入栈
          result.push([nums[i], nums[first], nums[last]]);
          break;
        } else if (temp > 0) {
          // last--; // 可以优化，相同值跳过
          while (first < last && nums[last] === nums[last - 1]) {
            last--;
          }
          // continue;
        } else if (temp < 0) {
          // first++;
          console.log("===", first, nums[first], nums[first + 1]);
          while (first < last && nums[first] === nums[first + 1]) {
            first++;
          }
          // continue;
        }
      }

      i++;
    }
  }
  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// console.log(threeSum([-1, 0, 1]));
// console.log(threeSum([2, -1, -4]));
// console.log(threeSum([2]));
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 0, 0]));
console.log(threeSum([-1, 2, -1]));
console.log(threeSum([-1, 0, 1]));
