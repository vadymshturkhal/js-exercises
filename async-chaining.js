'use strict';

// This code modifies code at link below
// https://github.com/HowProgrammingWorks/AsynchronousProgramming/blob/master/JavaScript/5-chain.js

const Queue = require('./queue');

class Chain {
  constructor() {
    this._queue = new Queue();
  };

  do(cb, ...args) {
    this._queue.put(cb.bind(null, ...args));
    return this;
  };

  start() {
    const queueLength = this._queue.length;
    for (let i = 0; i < queueLength; i++) {
      this._queue.pick()();
    };
  };
};

// Emulate asynchronous calls

function wrapAsync(fn) {
  function F(...args) {
    setTimeout(
      function L() {
        fn(...args), Math.floor(Math.random() * 1000);
      });
  };

  Object.defineProperty(F, 'name', {
    enumerable: false,
    configurable: false,
    writable: true,
    value: fn.name,
  })

  return F;
};

// Asynchronous functions

const readConfig = wrapAsync((...args) => {
  console.log('(1) config loaded: ', ...args);
});

const selectFromDb = wrapAsync((...args) => {
  console.log('(2) SQL query executed: ', ...args);
});

const getHttpPage = wrapAsync((...args) => {
  console.log('(3) Page retrieved: ', ...args);
});

const readFile = wrapAsync((...args) => {
  console.log('(4) Readme file loaded: ', ...args);
});

// Usage

const startChain = new Chain().do(readConfig, 'myConfig')
  .do(selectFromDb, 'select * from cities')
  .do(getHttpPage, 'http://kpi.ua')
  .do(readFile, 'README.md');

startChain.start();
