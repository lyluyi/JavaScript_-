// 3.1 使用字面值创建对象

// bad
const item = new Object();

// good
const item = {};

// 3.2 如果你的代码在浏览器环境下执行，别使用保留字作为键值，这样IE8不会运行
// 但是在ES6模块和服务端没有问题

// bad
const superman = {
  default: { clark: 'kent' },
  private: true
}

// good
const superman = {
  defaults: { clark: 'kent' },
  hidden: true
}

// 3.3 使用同义词替换需要使用的保留字

// bad
const superman = {
  class: 'alen'
}

// bad
const superman = {
  klass: 'alen'
}

// good
const superman = {
  type: 'alen'
}

// 3.4 创建有动态属性名的对象时，使用可被计算的属性名称

// 为什么？ 因为这样可以让你在一个地方定义所有的对象属性

function getKey(k) {
  return `a key named ${k}`
}

// bad 
const obj = {
  id: 5,
  name: 'san France'
}
obj[getKey('enabled')] = true

// good 
const obj = {
  id: 5,
  name: 'San France',
  [getKey('enabled')]: true
}

// 3.5 使用对象方法简写

// bad
const atom = {
  value: 1,
  addValue: function (value) {
    return atom.value + value
  }
}

// good
const atom = {
  value: 1,
  addValue (value) {
    return atom.value + value
  }
}

// 3.6 使用对象属性简写
// 为什么？ 因为这样更短更有描述性
const lukeSkywalker = 'luke SkyWalker'

// bad
const obj = {
  lukeSkywalker: lukeSkywalker,
}

// good
const obj = {
  lukeSkywalker,
}

// 3.7 在对象属性声明钱把简写的属性分组
// 为什么？ 因为这样能清楚弟看出哪些属性使用了简写

const apple = 'apple'
const pear = 'pear'

// bad 
const obj = {
  apple,
  banana: '123',
  pear,
}

// good
const obj = {
  apple,
  pear,
  banana: '123',
}