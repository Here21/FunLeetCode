/**
 * 单例模式
 * 特点：保证全局只有一个对象可以访问
 * 注意：JS 是门无类的语言，只需要用一个变量确保实例只创建一次就行
 */

// 对象字面量，非单例，因为不能被实例化
var SingletonObj = {
  attr1: 1,
  attr2: 2,
  method1: function() {
    return this.attr1;
  },
  method2: function() {
    return this.attr2;
  }
};

// 单体模式基本结构
var Singleton = function(name) {
  this.name = name;
  this.instance = null;
};
Singleton.prototype.getName = function() {
  return this.name;
};

let instance = null;
// 获取实例对象
function getInstance(name) {
  if (!instance) {
    instance = new Singleton(name);
  }
  return instance;
}
// 测试单体模式的实例
var a = getInstance("aa");
var b = getInstance("bb");

console.log(a);
console.log(b);

console.log(a.getName()); // aa
console.log(b.getName()); // aa

console.log(a === b); // true

// 封装单体模式
// 单体模式
var Singleton1 = function(name) {
  this.name = name;
};
Singleton1.prototype.getName = function() {
  return this.name;
};
// 获取实例对象
var getInstance1 = (function() {
  var instance = null;
  return function(name) {
    if (!instance) {
      instance = new Singleton(name);
    }
    return instance;
  };
})();
// 测试单体模式的实例
var c = getInstance1("cc");
var d = getInstance1("dd");

console.log(c);

class Singleton2 {
  constructor() {}
}

Singleton2.getInstance = (function() {
  let instance;
  return function() {
    if (!instance) {
      instance = new Singleton2();
    }
    return instance;
  };
})();

let s1 = Singleton2.getInstance();
let s2 = Singleton2.getInstance();
console.log(s1 === s2); // true
