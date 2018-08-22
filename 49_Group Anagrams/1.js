// var groupAnagrams = function(strs) {
//   let count = 0;
//   const result = [];
//   const set = new Set();
//   const arr = strs.map(str => {
//     return str.split('').sort((a,b) => a > b).join('');
//   })
//   for(let i = 0; i < strs.length; i++) {
//     if(!set.has(i)) {
//       result[count] = [...strs[i]]
//       count++;
//     }
//   }
// };

var groupAnagrams = function(strs) {
  if(strs === null || strs.length === 0) {
    return [];
  }
  const map = new Map();
  const arr = strs.map(str => {
    return str.split('').sort((a,b) => a > b).join('');
  })
  for(let i = 0; i < arr.length; i++) {
    if(map.has(arr[i])) {
      map.get(arr[i]).push(strs[i]);
    } else {
      map.set(arr[i], [strs[i]]);
    }
  }
  return [...map.values()];
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));