// 15.1 优先使用 === 和 !== 而不是 == 和 !=.

// 15.2 条件表达式例如 if 语句通过抽象方法 ToBoolean 强制计算它们的表达式并且总是遵守下面的规则：

// 对象 被计算为 true
// Undefined 被计算为 false
// Null 被计算为 false
// 布尔值 被计算为 布尔的值
// 数字 如果是 +0、-0、或 NaN 被计算为 false, 否则为 true
// 字符串 如果是空字符串 '' 被计算为 false，否则为 true

if ([0]) {
  // true
  // An array is an object, objects evaluate to true
}

// 15.3 使用简写。

// bad
if (name !== '') {
  // ...stuff...
}

// good
if (name) {
  // ...stuff...
}

// bad
if (collection.length > 0) {
  // ...stuff...
}

// good
if (collection.length) {
  // ...stuff...
}
