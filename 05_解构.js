// 5.1 使用解构存取和使用多属性对象
// 为什么？ 因为解构能减少临时引用属性

// bad
function getFullName (user) {
  const firstName =  user.firstName
  const lastName = user.lastName

  return `${firstName}${lastName}`

}

// good
function getFullNameCopy(user) {
  const { firstName, lastName } = user

  return `${firstName}${lastName}`
}

// 5.2 对数组使用解构赋值

const arr = [1, 2, 3, 4]

// bad
const first = arr[0]
const second = arr[1]

// good

const [first, second] = arr

// 5.3 需要回传多个值时，使用对象解构，而不是数组解构

// 为什么？ 增加属性或者改变排序不会改变调用时的位置

// bad
function processInput (input) {
  return [left, right, top, bottom]
}

// 调用时，需要考虑回调数据的顺序
const [ left, __, top ] = processInput(input)

// good
function processInput(input) {

  const {left, right, top, bottom} = input

  return { left, right, top, bottom }
}

const { left, right } = processInput({ left: 'left', top: 'top', right: 'right' })

console.log(left, right)





