/**
 * 工厂模式
 *  特点：提供一个接口，隐藏了创建实例的复杂度
 *  注意：ES5中，无法识别对象类型
 */

// ES6
class Human {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  speak() {
    console.log("my name is ", this.name);
  }
}

class Factory {
  static create(name, age, gender) {
    return new Human(name, age, gender);
  }
}

const p1 = Factory.create("Martin", 25, "Male");
const p2 = Factory.create("Rachel", 23, "Female");

console.log(p1);
console.log(p2);
console.log(p1.speak());
console.log(p2.speak());

console.log("p1:", typeof p1, "p2:", typeof p2);
console.log("p1:", p1 instanceof Human);
console.log("p1:", p1 instanceof Factory);
console.log("p2:", p1 instanceof Human);
console.log("p2:", p1 instanceof Factory);

console.log("--------------------------");
// ES5

function Human1(name, age, gender) {
  var _object = {};
  _object.name = name;
  _object.age = age;
  _object.gender = gender;
  _object.speak = function() {
    // Human1被new 实例化后，this指向自己内部的_object
    console.log("my name is ", this.name);
  };
  return _object;
}

function Factory1(name, age, gender) {
  return new Human1(name, age, gender);
}

var p11 = Factory1("Jack", 22, "Male");
var p22 = Factory1("Lucy", 23, "Female");

console.log(p11);
console.log(p22);
console.log(p11.speak());
console.log(p22.speak());

console.log("p11:", typeof p11, "p22:", typeof p22);
console.log("p11:", p11 instanceof Human1);
console.log("p11:", p11 instanceof Factory1);
console.log("p22:", p11 instanceof Human1);
console.log("p22:", p11 instanceof Factory1);
