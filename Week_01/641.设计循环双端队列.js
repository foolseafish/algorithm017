/*
 * @lc app=leetcode.cn id=641 lang=javascript
 *
 * [641] 设计循环双端队列
 */

// @lc code=start
/**
 * Initialize your data structure here. Set the size of the deque to be k.
 * @param {number} k
 */
var MyCircularDeque = function(k) {
    this.deque = [];
    this.limit = k;    
};

/**
 * Adds an item at the front of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
    // if (this.deque.length >= this.limit) return false;
    // this.deque.unshift(value);
    // return true;
    // 不适用原型链方法
    const deque = this.deque;
    if (deque.length >= this.limit) return false;
    for (let i = deque.length; i > 0; i--){
        deque[i] = deque[i - 1];
    }
    deque[0] = value;
    return true; 
};

/**
 * Adds an item at the rear of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
    // if (this.deque.length >= this.limit) return false;
    // this.deque.push(value);
    // return true;
    // 不适用原型链方法
    const deque = this.deque
    if (deque.length >= this.limit) return false;
    deque[deque.length] = value;
    return true; 
};

/**
 * Deletes an item from the front of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
    // if (this.deque.length === 0) return false;
    // this.deque.shift();
    // return true;
    // 不适用原型链方法
    const deque = this.deque;
    if (deque.length === 0) return false;
    for (let i = 1, len = deque.length; i < len; i++) {
        deque[i - 1] = deque[i];
    }
    deque.length--;
    return true;
};

/**
 * Deletes an item from the rear of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
    // if (this.deque.length === 0) return false;
    // this.deque.pop();
    // return true;
     // 不适用原型链方法
     if (this.deque.length === 0) return false;
     this.deque.length--;
     return true;
};

/**
 * Get the front item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
    if (this.deque.length === 0) return -1;    
    return this.deque[0];
};

/**
 * Get the last item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
    if (this.deque.length === 0) return -1;    
    return this.deque[this.deque.length - 1];
};

/**
 * Checks whether the circular deque is empty or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
    return this.deque.length === 0;
};

/**
 * Checks whether the circular deque is full or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
    return this.deque.length === this.limit;
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
// @lc code=end

