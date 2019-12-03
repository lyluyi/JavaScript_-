// 4.1 使用字面量的创建数组

// bad
const items = new Array()

// good
const items = []

// 4.2 向数组添加元素时，使用Array.push 替代直接赋值
const someStack = []

// bad
someStack[someStack.length] =  '123'

// good
someStack.push('123')

// 4.3 使用扩展运算符复制数组

// bad
const len = items.length
const itemsCopy = []
let i;
for (i = 0; i < len; i++) {
  itemsCopy[i] = items[i]
}

// good
const itemsCopy = [...items]