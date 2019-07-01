import {
  // findIndex,
  // findLastIndex,
  // flatten,
  // sortedIndex,
  // indexOf,
  // lastIndexOf,
  // eq,
  curry
} from './core';
// const condition = (item) => item == 1;
// console.log(findIndex(['a', 1, '3', 4], condition));
// console.log(findLastIndex([1, 2, 1, 3, 4], condition));
// var arr = [1, 2, [3, 4]];
// console.log(flatten(arr, false, false)); // [3, 4]
// console.log(sortedIndex([10, 20, 30, 40, 50], 50)) // 3
// var stooges = [{name: 'stooge1', age: 10}, {name: 'stooge2', age: 30}];
// var result = sortedIndex(stooges, {name: 'stooge3', age: 20}, function(stooge){
//     return stooge.age
// });
// console.log(result) // 1
// var result = indexOf([1, 2, 3, 4, 5], 2);
// var result = lastIndexOf([1, 2, 3, 4, 5], 3);
// console.log(result) // 1

// console.log(eq(0, 0)) // true
// console.log(eq(0, -0)) // false

// console.log(eq(NaN, NaN)); // true
// console.log(eq(Number(NaN), Number(NaN))); // true

// console.log(eq('Curly', new String('Curly'))); // true

// console.log(eq([1], [1])); // true
// console.log(eq({ value: 1 }, { value: 1 })); // true

// var a, b;

// a = { foo: { b: { foo: { c: { foo: null } } } } };
// b = { foo: { b: { foo: { c: { foo: null } } } } };
// a.foo.b.foo.c.foo = a;
// b.foo.b.foo.c.foo = b;

// console.log(eq(a, b)) // true
// function add(a, b) {
//   return a + b;
// }

// var addCurry = curry(add, 1, 2);
// console.log(addCurry()); // 3
// //或者
// var addCurry = curry(add, 1);
// console.log(addCurry(2)); // 3
// //或者
// var addCurry = curry(add);
// console.log(addCurry(1, 2)); // 3

var fn = curry(function(a, b, c) {
  return [a, b, c];
});

console.log(fn("a", "b", "c")) // ["a", "b", "c"]
console.log(fn("a", "b")("c")) // ["a", "b", "c"]
console.log(fn("a")("b")("c")) // ["a", "b", "c"]
console.log(fn("a")("b", "c")) // ["a", "b", "c"]