// 1.1 基本类型：直接存取基本类型 String Number  Boolean Null Undefined

const foo = 1
let bar = foo

bar = 9

console.log(foo, bar) // 1, 9

// 1.2 复杂类型：通过引用的方式存取复杂类型 Object Array Function

const foo = [1, 2]
const bar = foo
bar[0] = 9

console.log(foo[0], bar[0]) // 9 


