// 9.1 总是使用 class。避免直接操作 prototype 

// bad
function Queue(contents = []) {
  this._queue = [...contents]
}

Queue.prototype.pop = function () {
  const value = this._queue[0]
  this._queue.splice(0, 1)
  return value
}

// good
class Queue {
  constructor([...contents]) {
    this._queue = [...contents]
  }

  pop () {
    const value = this._queue[0]
    this._queue.splice(0, 1)
    return value
  }
}

// 9.2 使用 extends 继承。

// 为什么？因为 extends 是一个内建的原型继承方法并且不会破坏 instanceof。

// bad
const inherits = require('inherits');
function PeekableQueue(contents) {
  Queue.apply(this, contents);
}
inherits(PeekableQueue, Queue);
PeekableQueue.prototype.peek = function() {
  return this._queue[0];
}

// good
class PeekableQueue extends Queue {
  peek() {
    return this._queue[0];
  }
}

// 9.3 方法可以返回 this 来帮助链式调用。

// bad
Jedi.prototype.jump = function() {
  this.jumping = true;
  return true;
};

Jedi.prototype.setHeight = function(height) {
  this.height = height;
};

const luke = new Jedi();
luke.jump(); // => true
luke.setHeight(20); // => undefined

// good
class Jedi {
  jump() {
    this.jumping = true;
    return this;
  }

  setHeight(height) {
    this.height = height;
    return this;
  }
}

const luke = new Jedi();

luke.jump()
    .setHeight(20);

// 9.4 可以写一个自定义的 toString() 方法，但要确保它能正常运行并且不会引起副作用。
class Jedi {
  constructor(options = {}) {
    this.name = options.name || 'no name'
  }

  getName () {
    return this.name
  }

  toString () {
    return `${this.name}-of minde`
  }
}

