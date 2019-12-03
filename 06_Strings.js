// 6.1 字符串使用单引号''

// bad 
const name = "Capt. JaneWay"

// good
const name = 'Lucy. lyli'

// 6.2 字符串超过80个字节应该使用字符串连接好换行

// 6.3 注： 过渡使用字符串连接符可能会对性能造成影响

// bad
const errorMessage = 'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';

// bad
const errorMessage = 'This is a super long error that was thrown because \
of Batman. When you stop to think about how Batman had anything to do \
with this, you would get nowhere \
fast.';

// good
const errorMessage = 'This is a super long error that was thrown because ' +
  'of Batman. When you stop to think about how Batman had anything to do ' +
  'with this, you would get nowhere fast.';

// 6.4  程序化生成字符串时，使用模板字符串代替字符串连接

// bad
function sayHi(name) {
  return 'How are you, ' + name + '?';
}

// bad
function sayHi(name) {
  return ['How are you, ', name, '?'].join();
}

// good
function sayHi(name) {
  return `How are you, ${name}?`;
}