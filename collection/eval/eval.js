(() => {
  const func = e => e.innerText;
  console.log(func({ innerText: "test text" }));
})();

(() => {
  const attr = "innerText";
  const func = e => e[attr];
  console.log(func({ innerText: "test text" }));
})();

const attr = "innerHTML";
// 这应该是框架内的做法
const funcTrans = func => eval(func.toString());

(() => {
  const attr = "innerText";
  // 所以这样写就报错, 直接使用e.innerText就ok
  const func = e => e[attr];
  // const func = (e) => e.innerText;

  console.log(funcTrans(func)({ innerText: "test text" }));
})();
