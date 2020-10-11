/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = {};
    const bh = new BinaryHeap((a,b) => map[a] > map[b]);
    nums.forEach(num => {
        map[num] = map[num] || 0;
        map[num]++;
    });
    Object.keys(map).forEach(num => bh.offer(num))
    const ans = [];
    while(k--) {
        ans.push(bh.poll());
    }
    return ans
};

function BinaryHeap(priorityFunction) {
    this.arr = [];
    this.priorityFunction = priorityFunction;
    this.ary = 4;
}
BinaryHeap.prototype.poll = function() {
    const heap = this.arr;
    const top = heap[0];
    const len = heap.length;
    heap[0] = heap[len - 1];
    heap.length = len - 1;
    this.heapifyDown();
    return top;
}
BinaryHeap.prototype.offer = function(value) {
    this.arr.push(value);
    this.heapifyUp();
}
BinaryHeap.prototype.heapifyUp = function() {
    const heap = this.arr;
    let index = heap.length - 1;
    while(index > 0) {
        const parent = Math.floor((index - 1) / this.ary);
        if (!this.priorityFunction(heap[index], heap[parent])) break;
        arraySwap(heap, index, parent);
        index = parent;
    }
}
BinaryHeap.prototype.heapifyDown = function() {
    const heap = this.arr;
    let temp;
    let index = 0;
    let childStartIndex = index * this.ary + 1;
    while(childStartIndex < heap.length) {
        const maxChildIndex = heap.slice(childStartIndex,childStartIndex + this.ary).reduce((maxChildIndex,now,nowIndex,arr) => {
            if (nowIndex === 0) return maxChildIndex;
            return this.priorityFunction(arr[maxChildIndex],now)? maxChildIndex: nowIndex;
        }, 0) + childStartIndex;
        if (!this.priorityFunction(heap[maxChildIndex], heap[index]))break;
            arraySwap(heap, maxChildIndex, index);
            index = maxChildIndex;
            childStartIndex = index * this.ary + 1;
    }
}

function arraySwap(arr, start, end) {
    [arr[start],arr[end]] = [arr[end],arr[start]];
}
// @lc code=end

