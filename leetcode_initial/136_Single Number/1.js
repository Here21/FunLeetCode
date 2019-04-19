var singleNumber = function(nums) {
  let result = 0;
  for(let i of nums) {
    result = result ^ i;
  }
  return result
};

console.log(singleNumber([2,2,1]));
