var reverse = function(x) {
  let sign = x < 0 ? "-" : "";
  let arr = Math.abs(x).toString().split("").reverse();
  // let xNew = Number(Math.abs(x).toString().split("").reverse().join(""));
  for(let i = 0; i < arr.lenth; i++) {
    if(arr[i] === 0) arr.shift();
    return;
  }
  let result = Number(sign + arr.join(""));
  // Math.pow() 函数返回基数（base）的指数（exponent）次幂，即 base ^ exponent。
  return Math.abs(result) < (Math.pow(2, 31) - 1) ? result : 0;
};

console.log(reverse(10012333333330000));