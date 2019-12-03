// 11.1 不要使用iterators, 使用高阶函数，例如map() 和 reducer() 替代for-of
// 为什么？这加强了我们不变的规则。处理纯函数的回调值更易读，这比它带来的副作用更重要

const numbers = [1, 2, 3, 4, 5]

// bad
let sum = 0;
for (let num of numbers) {
  sum += sum

}

sum === 15


// good
const numbers = [1, 2, 3, 4, 5]
let sum = 0
const sum = numbers.forEach(num => sum += num)

// best
const sum = numbers.reduce((total, num) => total + num, 0)


// for … in循环由于历史遗留问题，它遍历的实际上是对象的属性名称。一个Array数组实际上也是一个对象，它的每个元素的索引被视为一个属性。
// 当我们手动给Array对象添加了额外的属性后，for … in循环将带来意想不到的意外效果：

// var a = ['A', 'B', 'C'];
// a.name = 'Hello';
// for (var x in a) {
//     alert(x); // '0', '1', '2', 'name'
// }

// for … in循环将把name包括在内，但Array的length属性却不包括在内。

// for … of循环则完全修复了这些问题，它只循环集合本身的元素：

// var a = ['A', 'B', 'C'];
// a.name = 'Hello';
// for (var x of a) {
//    alert(x); // 'A', 'B', 'C'
// }