function lengthOfLongestSubstring(s) {
  let set = new Set();
  let arr = [];
  let max = 0;
  let left = 0, right = 0;
  while (left < s.length && right < s.length) {
    let ss = s.charAt(right);
    // 移动窗口
    if(set.has(ss)) {
      set.delete(s.charAt(left));
      ++left;
    } else {
      set.add(ss);
      arr.push(s.slice(left, right));
      ++right;
      max = Math.max(max, right - left);
    }
  }
  console.log(arr);
  return max;
}

console.log(lengthOfLongestSubstring('aagbcdecbbscvbnmjk'));
