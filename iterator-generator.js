'use strict';

const range = {
  start: 1,
  end: 10,
  *[Symbol.iterator]() {
    let value = this.start;
    while (value < this.end) {
      yield value;
      value += 1;
    }
  }
};

for (const number of range) {
  console.log(number);
}
