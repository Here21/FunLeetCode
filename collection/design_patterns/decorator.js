/**
 * 装饰器
 * 特点：装饰器模式并不去深入依赖于对象是如何创建的，而是专注于扩展它们的功能这一问题上。
 *
 * 参考：https://segmentfault.com/a/1190000014495089#articleHeader6
 *      http://wiki.jikexueyuan.com/project/javascript-design-patterns/decorative-pattern.html
 */

// ES7 依赖 Object.defineProperty 直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。

function isAnimal(target) {
  target.isAnimal = true;
  return target;
}
// ES7 装饰器 @isAnimal
// @isAnimal == isAnimal(Cat)
class Cat {}

isAnimal(Cat);

console.log(Cat.isAnimal); // true

// ES5
// Animal constructor
function Animal(type) {
  this.type = type || "dog";
  this.age = 1;
  this.gender = "male";
}

// instance
const cat = new Animal("cat");
cat.changeGender = function(gender) {
  this.gender = gender;
};
cat.addOwner = function(name) {
  this.owner = name;
};

cat.changeGender("famale");
cat.addOwner("Martin");

console.log(cat);
// Animal {
// type: 'cat',
// age: 1,
// gender: 'famale',
// changeGender: [Function],
// addOwner: [Function],
// owner: 'Martin' }

// Animal 仍未改变

const dog = new Animal();
console.log(dog);
// Animal { type: 'dog', age: 1, gender: 'male' }
