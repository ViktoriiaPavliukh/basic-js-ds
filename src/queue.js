const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.begin = null;
    this.last = null;
  }

  getUnderlyingList() {
    return this.begin;
  }

  enqueue(value) {
    const node = new ListNode(value);

    if(!this.begin){
      this.begin = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
  }

  dequeue() {
    if(!this.begin) {
      return null;
    }

    const value = this.begin.value;

    if(this.begin === this.last) {
      this.begin = null;
      this.last = null;
    } else {
      this.begin = this.begin.next;
    }
    return value;
  }
}

module.exports = {
  Queue
};
