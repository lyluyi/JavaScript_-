// 13.1 一直使用 const 来声明变量，如果不这样做就会产生全局变量。我们需要避免全局命名空间的污染。地球队长已经警告过我们了。（译注：全局，global 亦有全球的意思。地球队长的责任是保卫地球环境，所以他警告我们不要造成「全球」污染。）

// bad
superPower = new SuperPower();

// good
const superPower = new SuperPower();

// 13.2 使用 const 声明每一个变量。

// 为什么？增加新变量将变的更加容易，而且你永远不用再担心调换错 ; 跟 ,。

// bad
const items = getItems(),
    goSportsTeam = true,
    dragonball = 'z';

// bad
// (compare to above, and try to spot the mistake)
const items = getItems(),
    goSportsTeam = true;
    dragonball = 'z';

// good
const items = getItems();
const goSportsTeam = true;
const dragonball = 'z';

// 13.3 将所有的 const 和 let 分组

// 为什么？当你需要把已赋值变量赋值给未赋值变量时非常有用。

// bad
let i, len, dragonball,
    items = getItems(),
    goSportsTeam = true;

// bad
let i;
const items = getItems();
let dragonball;
const goSportsTeam = true;
let len;

// good
const goSportsTeam = true;
const items = getItems();
let dragonball;
let i;
let length;

// 13.4 在你需要的地方给变量赋值，但请把它们放在一个合理的位置。

// 为什么？let 和 const 是块级作用域而不是函数作用域。

// good
function fun() {
  test();
  console.log('doing stuff..');

  //..other stuff..

  const name = getName();

  if (name === 'test') {
    return false;
  }

  return name;
}

// bad - unnecessary function call
function fun(hasName) {
  const name = getName();

  if (!hasName) {
    return false;
  }

  this.setFirstName(name);

  return true;
}

// good
function fun(hasName) {
  if (!hasName) {
    return false;
  }

  const name = getName();
  this.setFirstName(name);

  return true;
}
