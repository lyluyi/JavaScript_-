// 23.1 属性的存取函数不是必须的。

// 23.2 如果你需要存取函数时使用 getVal() 和 setVal('hello')。

// bad
dragon.age();

// good
dragon.getAge();

// bad
dragon.age(25);

// good
dragon.setAge(25);

// 23.3 如果属性是布尔值，使用 isVal() 或 hasVal()

// bad
if (!dragon.age()) {
  return false;
}

// good
if (!dragon.hasAge()) {
  return false;
}

// 23.4 创建 get() 和 set() 函数是可以的，但要保持一致。

class Jedi {
  constructor(options = {}) {
    const lightsaber = options.lightsaber || 'blue';
    this.set('lightsaber', lightsaber);
  }

  set(key, val) {
    this[key] = val;
  }

  get(key) {
    return this[key];
  }
}