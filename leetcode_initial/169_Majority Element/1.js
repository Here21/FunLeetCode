var majorityElement = function(nums) {
  const result = nums.sort((a, b) => a - b);
  return result[Math.floor(result.length / 2)];
};

const arr = [1, 2, 2, 1, 1, 2, 2, 2, 2];

console.log(majorityElement(arr))