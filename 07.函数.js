// // 7.1 使用函数声明代替函数表达式

// // 为什么？因为函数声明是可命名的，所以他们在调用栈中更容易被识别。
// // 此外，函数声明会把整个函数提升（hoisted），
// // 而函数表达式只会把函数的引用变量名提升。
// // 这条规则使得箭头函数可以取代函数表达式。

// // bad
// const foo = function () {
// };

// // good
// function foo() {
// }

// // 7.2 函数表达式

// // 立即调用的函数表达式 (IIFE)

// (() => {
//   console.log('Welcome to the Internet. Please follow me.');
// })()

// // 7.3 永远不要再一个非函数代码块(if, while等)中声明一个函数
// // 把那么函数赋给一个变量，浏览器允许你这么做，但他们的解析表现不一致

// // bad
// if (currentUser) {
//   function test() {
//     console.log('Nope.');
//   }
// }

// // good
// let test;
// if (currentUser) {
//   test = () => {
//     console.log('Yup.');
//   };
// }

// // 7.5 永远不要把参数命名为 arguments。这将取代原来函数作用域内的 arguments 对象。

// // bad
// function nope(name, options, arguments) {
//   // ...stuff...
// }

// // good
// function yup(name, options, args) {
//   // ...stuff...
// }

// 7.6 不要使用arguments 可以使用rest语法...替代

// 为什么？ 使用...能明确你要传入的参数，领带rest参数时一个真正的数组
// 而arguments是一个类数组

// bad
function test(a,b,c,d) {
  var arg = Array.prototype.slice.call(arguments, 0, 2);
  console.log(arg) // ['a', 'b']
}
test('a', 'b', 'c', 'd')


// good
function concatenateAll(...args) {

  console.log(args) // ['a', 'b', 'c', 'd']
  console.log(args.join(''))

}

concatenateAll('a', 'b', 'c', 'd')

// 7.7 直接给函数的参数指定默认值，不要使用一个变化的函数参数。

// really bad
function handleThings(opts) {
  // 不！我们不应该改变函数参数。
  // 更加糟糕: 如果参数 opts 是 false 的话，它就会被设定为一个对象。
  // 但这样的写法会造成一些 Bugs。
  //（译注：例如当 opts 被赋值为空字符串，opts 仍然会被下一行代码设定为一个空对象。）
  opts = opts || {};
  // ...
}

// still bad
function handleThings(opts) {
  if (opts === void 0) {
    opts = {};
  }
  // ...
}

// good
function handleThings(opts = {}) {
  // ...
}

// 7.8 直接给函数参数赋值时需要避免副作用。

// 为什么？因为这样的写法让人感到很困惑。

var b = 1;
// bad
function count(a = b++) {
  console.log(a);
}
count();  // 1
count();  // 2
count(3); // 3
count();  // 3