function deepClone(obj) {
  for (const [key, value] of Object.entries(obj)) {
    console.log(key, value);
  }
}

const obj = {
  a: 1,
  b: [1, 2, 3],
  c: {
    d: 1,
    e: [4, 5, 6],
    j: {
      h: "123",
      i: ""
    }
  }
};

console.log(obj);

deepClone(obj);
