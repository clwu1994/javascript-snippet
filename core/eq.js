var toString = Object.prototype.toString;
function isFunction(obj) {
  return toString.call(obj) === "[object Function]";
}
function deepEq(a, b, aStack, bStack) {
  var className = toString.call(a);
  if (className !== toString.call(b)) return false;
  switch (className) {
    case "[object String]":
      return "" + a === "" + b;
    case "[object Number]":
      if (+a !== +a) return +b !== +b;
      return +a === 0 ? 1 / +a === 1 / b : +a === +b;
    case "[object Date]":
    case "[object Boolean]":
      return +a === +b;
  }
  var areArrays = className === "[object Array]";
  // 如果不是数组
  if (!areArrays) {
    if (typeof a != "object" || typeof b != "object") return false;
    var aCtor = a.constructor,
      bCtor = b.constructor;
    // aCtor 和 bCtor 必须都存在并且都不是 Object 构造函数的情况下，aCtor 不等于 bCtor， 那这两个对象就真的不相等啦
    if (
      aCtor !== bCtor &&
      !(
        isFunction(aCtor) &&
        aCtor instanceof aCtor &&
        isFunction(bCtor) &&
        bCtor instanceof bCtor
      ) &&
      ("constructor" in a && "constructor" in b)
    ) {
      return false;
    }
  }
  // 现在终于可以进入我们期待已久的数组和对象的判断，不过其实这个很简单，就是递归遍历一遍……
  aStack = aStack || [];
  bStack = bStack || [];
  var length = aStack.length;
  while (length--) {
    if (aStack[length] === a) {
      return bStack[length] === b;
    }
  }
  aStack.push(a);
  bStack.push(b);

  if (areArrays) {
    length = a.length;
    if (length !== b.length) return false;
    while (length--) {
      if (!eq(a[length], b[length], aStack, bStack)) return false;
    }
  } else {
    var keys = Object.keys(a),
      key;
    length = keys.length;
    if (Object.keys(b).length !== length) return false;
    while (length--) {
      key = keys[length];
      if (!(b.hasOwnProperty(key) && eq(a[key], b[key], aStack, bStack)))
        return false;
    }
  }
  aStack.pop();
  bStack.pop();
  return true;
}

function eq(a, b, aStack, bStack) {
  // debugger;
  // === 结果为 true 的区别出 +0 和 -0
  if (a === b) return a !== 0 || 1 / a === 1 / b;
  // typeof null 的结果为 object ，这里做判断，是为了让有 null 的情况尽早退出函数
  if (a == null || b == null) return false;
  // 判断 NaN
  if (a !== a) return b !== b;
  // 判断参数 a 类型，如果是基本类型，在这里可以直接返回 false
  var type = typeof a;
  if (type !== "function" && type !== "object" && typeof b != "object")
    return false;
  if (typeof a == "number") return a === b;
  // 更复杂的对象使用 deepEq 函数进行深度比较
  return deepEq(a, b, aStack, bStack);
}
export default eq;
