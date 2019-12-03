// 16.1 使用大括号包裹所有的多行代码块。

// bad
if (test)
  return false;

// good
if (test) return false;

// good
if (test) {
  return false;
}

// bad
function fun() { return false; }

// good
function fun() {
  return false;
}

// 16.2 如果通过 if 和 else 使用多行代码块，把 else 放在 if 代码块关闭括号的同一行。

// bad
if (test) {
  thing1();
  thing2();
}
else {
  thing3();
}

// good
if (test) {
  thing1();
  thing2();
} else {
  thing3();
}

