/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let maxCur = 0;
  let maxSoFar = 0;
  
  for(let i = 1; i < prices.length; i++) {
    maxCur = Math.max(0, maxCur += prices[i] - prices[i-1]);
    maxSoFar = Math.max(maxCur, maxSoFar);
  }
  return maxSoFar;
};

console.log(maxProfit([7,1,5,3,6,4]));
