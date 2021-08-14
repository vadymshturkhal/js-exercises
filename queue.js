'use strict';

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  put(item) {
    const last = this.last;
    const element = { next: null, item };
    if (last) {
      last.next = element;
      this.last = element;
    } else {
      this.first = element;
      this.last = element;
    }
    this.length++;
  }

  pick() {
    const element = this.first;
    if (!element) return null;
    if (this.last === element) {
      this.first = null;
      this.last = null;
    } else {
      this.first = element.next;
    }
    this.length--;
    return element.item;
  }
}

module.exports = Queue;
