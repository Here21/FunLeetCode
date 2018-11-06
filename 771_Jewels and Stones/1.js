var numJewelsInStones = function(J, S) {
  const set = new Set(J.split(''));
  let count = 0;
  for(let s of S) {
    if(set.has(s)) count++;
  }
  return count;
};

console.log(numJewelsInStones('Jz', 'zzzJjqasb'));
