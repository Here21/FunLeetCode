var isValid = function(s) {
    const arr = [];
    for(let i = 0; i < s.length; i++) {
      if(s.charAt(i) === '(') {
        arr.push(')');
        continue;
      }
      if(s.charAt(i) === '{') {
        arr.push('}');
        continue;
      }
      if(s.charAt(i) === '[') {
        arr.push(']');
        continue;
      }
      if(s.charAt(i) !== arr.pop()) {
        return false;
      }
    }
    return arr.length === 0;
};

console.log(isValid("{()}"));