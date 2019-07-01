/**
 * @description 在数学和计算机科学中，柯里化是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。
 * function add(a, b) {
 *  return a + b;
 * }
 * // 执行 add 函数，一次传入两个参数即可
 * add(1, 2) // 3
 * // 假设有一个 curry 函数可以做到柯里化
 * var addCurry = curry(add);
 * addCurry(1)(2) // 3
 */
// var _slice = Array.prototype.slice;
// function sub_curry(fn) {
//   var args = _slice.call(arguments, 1);
//   return function() {
//     var newArgs = args.concat(_slice.call(arguments));
//     return fn.apply(this, newArgs);
//   }
// }
// function curry(fn, length) {
//   length = length || fn.length;
//   return function() {
//     if (arguments.length < length) {
//       var combined = [fn].concat(_slice.call(arguments));
//       return curry(sub_curry.apply(this, combined), length - arguments.length);
//     } else {
//       return fn.apply(this, arguments);
//     }
//   }
// }
// function curry(fn, args) {
//   var length = fn.length;
//   args = args || [];
//   return function() {
//       var _args = args.slice(0),
//           arg, i;
//       for (i = 0; i < arguments.length; i++) {
//           arg = arguments[i];
//           _args.push(arg);
//       }
//       if (_args.length < length) {
//           return curry.call(this, fn, _args);
//       }
//       else {
//           return fn.apply(this, _args);
//       }
//   }
// }
function curry(fn, args, holes) {
  var length = fn.length;
  args = args || [];
  // 占位
  holes = holes || [];
  return function() {
    var _args = args.slice(0),
      _holes = holes.slice(0),
      argsLen = args.length,
      holesLen = holes.length,
      arg,
      i,
      index = 0;
    for (i = 0; i < arguments.length; i++) {
      arg = arguments[i];
      // 处理类似 fn(1, _, _, 4)(_, 3) 这种情况，index 需要指向 holes 正确的下标
      if (arg === _ && holesLen) {
        index++;
        if (index > holesLen) {
          _args.push(arg);
          _holes.push(argsLen - 1 + index - holesLen);
        }
      }
      // 处理类似 fn(1)(_) 这种情况
      else if (arg === _) {
        _args.push(arg);
        _holes.push(argsLen + i);
      }
      // 处理类似 fn(_, 2)(1) 这种情况
      else if (holesLen) {
        // fn(_, 2)(_, 3)
        if (index >= holesLen) {
          _args.push(arg);
        }
        // fn(_, 2)(1) 用参数 1 替换占位符
        else {
          _args.splice(_holes[index], 1, arg);
          _holes.splice(index, 1);
        }
      } else {
        _args.push(arg);
      }
    }
    if (_holes.length || _args.length < length) {
      return curry.call(this, fn, _args, _holes);
    } else {
      return fn.apply(this, _args);
    }
  };
}

export default curry;
