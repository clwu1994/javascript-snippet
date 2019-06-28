// 需求一：在一个排好序的数组中找到 value 对应的位置，保证插入数组后，依然保持有序的状态。
// 需求二：
// 现在的方法虽然能用，但通用性不够，比如我们希望能处理这样的情况：
// stooges 配角 比如 三个臭皮匠 The Three Stooges
// var stooges = [{name: 'stooge1', age: 10}, {name: 'stooge2', age: 30}];
// var result = sortedIndex(stooges, {name: 'stooge3', age: 20}, function(stooge){
//     return stooge.age
// });
// console.log(result) // 1

// 这玩意儿和bind区别在哪里？
function cb(func, context) {
  if (context === void 0) return func;
  return function() {
    return func.apply(context, arguments);
  }
}

/**
 * @param {*} array 
 * @param {*} obj 
 */
function sortedIndex(array, obj, iteratee, context) {
  iteratee = cb(iteratee, context);
  var low = 0, high = array.length;
  // 最小值大于等于最大值时退出循环
  while (low < high) {
    // 确定中位数
    var mid = Math.floor((low + high) / 2);
    // 中位数出现在给定值右侧
    if (iteratee(array[mid]) < iteratee(obj)) {
      // 最小值等于中位数下标加1
      low = mid + 1;
    }
    // 中位数出现在给定值左侧
    else {
      // 最大值等于中位数下标
      high = mid;
    }
  }
  return high;
}
export default sortedIndex;