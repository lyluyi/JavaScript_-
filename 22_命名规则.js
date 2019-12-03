// 22.1 避免单字母命名。命名应具备描述性。

// bad
function q() {
  // ...stuff...
}

// good
function query() {
  // ..stuff..
}

// 22.2 使用驼峰式命名对象、函数和实例。

// bad
const OBJEcttsssss = {};
const this_is_my_object = {};
function c() {}

// good
const thisIsMyObject = {};
function thisIsMyFunction() {}

// 22.3 使用帕斯卡式命名构造函数或类。
// bad
function user(options) {
  this.name = options.name;
}

const bad = new user({
  name: 'nope',
});

// good
class User {
  constructor(options) {
    this.name = options.name;
  }
}

const good = new User({
  name: 'yup',
});

// 22.4 不要使用下划线 _ 结尾或开头来命名属性和方法。

// bad
this.__firstName__ = 'Panda';
this.firstName_ = 'Panda';
this._firstName = 'Panda';

// good
this.firstName = 'Panda';

// 22.5 别保存 this 的引用。使用箭头函数或 Function#bind。

// bad
function foo() {
  const self = this;
  return function() {
    console.log(self);
  };
}

// bad
function foo() {
  const that = this;
  return function() {
    console.log(that);
  };
}

// good
function foo() {
  return () => {
    console.log(this);
  };
}

// 22.6 如果你的文件只输出一个类，那你的文件名必须和类名完全保持一致。

// file contents
class CheckBox {
  // ...
}
export default CheckBox;

// in some other file
// bad
import CheckBox from './checkBox';

// bad
import CheckBox from './check_box';

// good
import CheckBox from './CheckBox';

// 22.7 当你导出默认的函数时使用驼峰式命名。你的文件名必须和函数名完全保持一致。

function makeStyleGuide() {

}

// 22.8 当你导出单例、函数库、空对象时使用帕斯卡式命名。

const AirbnbStyleGuide = {
  es6: {
  }
};

export default AirbnbStyleGuide;
