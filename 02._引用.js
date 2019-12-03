// 2.1 对所有的引用使用const；不要使用var

// 为什么？ 这样能够确保你无法对引用进行重新复制，也不会导致出现BUG或难以理解

// bad 
var a = 1;
var b = 2;

// good
const a = 1;
const b = 2;


// 2.2 如果你一定需要可变动的引用，使用let代替var

// 为什么？因为let是块级作用及，而var是函数作用域

// bad
var count = 1;
if (true) {
  count += 1;
}

// good, use the let
let count = 1;
if (true) {
  count += 1;
}

// 2.3 注意 let和const都是块级作用域

// const 和 let 只存在于他们被定义的区块内
{
  let a = 1;
  let b = 2;
}
console.log(a, b) // ReferenceError ReferenceError


