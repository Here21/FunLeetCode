/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.values = [];
  this.min = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.values.push(x);
    const min = this.getMin();
    console.log('---->', min);

    if(min !== null) {
      this.min.push(Math.min(min, x));
    } else {
      this.min.push(x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.values.pop();
    this.min.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.values[this.values.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if(this.min.length > 0) {
      return this.min[this.min.length - 1];
    }
    return null;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin());   // --> Returns -3.
minStack.pop();
console.log(minStack.top());      // --> Returns 0.
console.log(minStack.getMin());   // --> Returns -2.