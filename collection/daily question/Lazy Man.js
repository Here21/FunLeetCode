/*
第 56 题：要求设计 LazyMan 类，实现以下功能。

LazyMan('Tony');
// Hi I am Tony

LazyMan('Tony').sleep(10).eat('lunch');
// Hi I am Tony
// 等待了10秒...
// I am eating lunch

LazyMan('Tony').eat('lunch').sleep(10).eat('dinner');
// Hi I am Tony
// I am eating lunch
// 等待了10秒...
// I am eating diner

LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food');
// Hi I am Tony
// 等待了5秒...
// I am eating lunch
// I am eating dinner
// 等待了10秒...
// I am eating junk food
*/

class LazyManClass {
  constructor(name) {
    this.taskList = [];
    console.log("my name:", name);
    // this.next();
    setTimeout(() => {
      this.next();
    });
  }

  eat(food) {
    console.log("eat func");
    const that = this;
    const fn = (function(name) {
      return () => {
        console.log("eat food: ", name);
        that.next();
      };
    })(food);
    this.taskList.push(fn);
    return this;
  }

  sleep(time) {
    console.log("sleep func");

    const that = this;
    const fn = (function() {
      return function() {
        console.log("sleeping...", time + "s");
        setTimeout(() => {
          that.next();
        }, 1000 * time);
      };
    })();
    this.taskList.push(fn);
    return this;
  }

  sleepFirst(time) {
    console.log("sleep first func");

    const that = this;
    const fn = (function(time) {
      return function() {
        console.log("sleep first", time + "s");
        setTimeout(() => {
          that.next();
        }, 1000 * time);
      };
    })(time);
    this.taskList.unshift(fn);
    return this;
  }

  next() {
    const fn = this.taskList.shift();
    console.log("---fn---", fn);
    fn && fn();
  }
}

function LazyMan(name) {
  return new LazyManClass(name);
}

// console.log(LazyMan("TEST").eat("food"));

LazyMan("Martin")
  .eat("pip")
  .sleep(2)
  .eat("lunch")
  .eat("apple")
  .sleep(3)
  .sleepFirst(1)
  .eat("dinner");

/*
这道题是链式调用 + 执行栈的结合，难点在于执行栈的执行顺序。
分析：
1：首先看示例1，需要实现链式调用，并实现一个延时函数，要实现延时，首先想到的就是setTimeOut。
2：示例2中，可以看出要按顺序来执行函数，并且需要等待延时函数执行完才可以执行管道的下一节。
这里考察的是，如何解决setTimeOut会将执行函数变为“异步”而打乱执行的顺序，可以思考执行栈的“先进先出”。
3：示例3中，可以看到sleepFirst函数会提前执行，但是这个函数也是延时函数，所以要考虑，如何将延时函数提前执行。

解析：
这道题的核心就是 setTimeOut函数 与 执行栈。

首先在构造函数中，创建一个任务队列（TaskList），这个任务队列就是来模拟执行栈的。
然后在管道执行函数的时候，在该函数内部创建一个 执行函数，将这个执行函数放到 TaskList 中，再调用函数执行器来实现 TaskList 的先进先出。
这样就实现了 1、2。

而想要实现3中的提前执行，则需要考虑 执行栈的栈结构，需要将先执行的插入队头。
*/
