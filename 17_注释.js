// 17.1 使用 /** ... */ 作为多行注释。包含描述、指定所有参数和返回值的类型和值。

// bad
// make() returns a new element
// based on the passed in tag name
//
// @param {String} tag
// @return {Element} element
function make(tag) {

  // ...stuff...

  return element;
}

// good
/**
 * make() returns a new element
 * based on the passed in tag name
 *
 * @param {String} tag
 * @return {Element} element
 */
function make(tag) {

  // ...stuff...

  return element;
}

// 17.2 使用 // 作为单行注释。在评论对象上面另起一行使用单行注释。在注释前插入空行。

// bad
const active = true;  // is current tab

// good
// is current tab
const active = true;

// bad
function getType() {
  console.log('fetching type...');
  // set the default type to 'no type'
  const type = this._type || 'no type';

  return type;
}

// good
function getType() {
  console.log('fetching type...');

  // set the default type to 'no type'
  const type = this._type || 'no type';

  return type;
}

// 17.3 给注释增加 FIXME 或 TODO 的前缀可以帮助其他开发者快速了解这是一个需要复查的问题，或是给需要实现的功能提供一个解决方式。这将有别于常见的注释，因为它们是可操作的。使用 FIXME -- need to figure this out 或者 TODO -- need to implement。

// 17.4 使用 // FIXME: 标注问题。

class Calculator {
  constructor() {
    // FIXME: shouldn't use a global here
    total = 0;
  }
}

// 17.5 使用 // TODO: 标注问题的解决方式。

class Calculator {
  constructor() {
    // TODO: total should be configurable by an options param
    this.total = 0;
  }
}