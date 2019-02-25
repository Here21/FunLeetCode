/**
 * 观察者模式 / 发布订阅模式
 * 概念：通过一对一或者一对多的依赖关系，当对象发生改变时，订阅方都会收到通知。
 * 区别：发布订阅模式中，订阅者和发布者之间的依赖性更低。
 *
 * @class Observer
 */
class Observer {
  constructor() {
    this.subscribers = {};
  }
  add(type, obj) {
    if (!this.subscribers[type]) {
      this.subscribers[type] = [];
    }
    this.subscribers[type].push(obj);
  }
  // unsubscribe 取消订阅 @param1 type  @param2 fn
  unsubscribe(type, fn) {
    // 先判断subscribers中存不存在type这个属性，不存在直接返回
    if (!this.subscribers[type]) {
      return;
    }
    // 存在type,将要取消订阅的订阅者找出，从订阅者名单中删除掉
    const listeners = this.subscribers[type];
    const len = listeners.length;
    for (let i = 0; i < len; i++) {
      if (listeners[i] === fn) {
        // 将取消订阅的观察者observer移除
        listeners.splice(i, 1);
        return;
      }
    }
  }
  // publish: 发布 @param1 type  @param2 eventArgs(事件信息)
  publish(type, event) {
    console.log("publish", type, event);
    // 判断观察者对象集合subscribers中存不存在type属性，不存在则表示为订阅，直接返回
    if (!this.subscribers[type]) {
      return;
    }

    // 先判断对象event中存不存在type这个属性，不存在就创建该属性
    if (!event[type]) {
      event[type] = type;
      console.log("created", event);
    }

    // 找到该事件对应的观察者，并发布通知
    const listeners = this.subscribers[type];
    const len = listeners.length;

    for (let i = 0; i < len; i++) {
      listeners[i](event);
    }
  }
}

// 创建一个可观察者Observable实例
var publisher = new Observer();

// 创建一个对象传入到订阅者中
var eventArgs = { message: "hello observer pattern!" };

// 创建一个订阅者
var subscriber1 = function(eventArgs) {
  console.log(eventArgs.message);
};
var subscriber2 = function(eventArgs) {
  console.log(eventArgs.message);
};
var subscriber3 = function(eventArgs) {
  console.log(eventArgs.message);
};

// 订阅 @param1 type  @param2 fn
publisher.add("message", subscriber1);
publisher.add("message", subscriber2);
publisher.add("message1", subscriber3);

// 发布 @param1 type  @param2 eventArgs(事件信息)
publisher.publish("message", eventArgs); // "hello observer pattern!"
publisher.publish("message1", eventArgs); // "hello observer pattern!"
