/**
 * @description
 * indexOf 的 fromIndex:
 * 设定开始查找的位置。如果该索引值大于或等于数组长度，意味着不会在数组里查找，返回 -1。如果参
 * 数中提供的索引值是一个负值，则将其作为数组末尾的一个抵消，即 -1 表示从最后一个元素开始查
 * 找，-2 表示从倒数第二个元素开始查找 ，以此类推。 注意：如果参数中提供的索引值是一个负值，仍
 * 然从前向后查询数组。如果抵消后的索引值仍小于 0，则整个数组都将会被查询。其默认值为 0。
 * lastIndexOf 的 fromIndex:
 * 从此位置开始逆向查找。默认为数组的长度减 1，即整个数组都被查找。如果该值大于或等于数组的长
 * 度，则整个数组会被查找。如果为负值，将其视为从数组末尾向前的偏移。即使该值为负，数组仍然会
 * 被从后向前查找。如果该值为负时，其绝对值大于数组长度，则方法返回 -1，即数组不会被查找。
 * 如果 indexOf 第三个参数不传开始搜索的下标值，而是一个布尔值 true，就认为数组是一个排好序的数
 * 组，这时候，就会采用更快的二分法进行查找，这个时候，可以利用我们写的 sortedIndex 函数。
 * @param {*} dir 
 */
function createIndexOfFinder(dir, predicate, sortedIndex) {
  return function (array, item, idx) {
    var length = array.length;
    var i = 0;
    if (typeof idx == 'number') {
      if (dir > 0) {
        i = idx >= 0 ? idx : Math.max(length + idx, 0);
      } else {
        length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
      }
    }
    else if (sortedIndex && idx && length) {
      idx = sortedIndex(array, item)
      // 如果该插入的位置的值正好等于元素的值，说明是第一个符合要求的值
      return array[idx] === item ? idx : -1;
    }
    // 判断元素是否是NaN
    if (item !== item) {
      // 在截取好的数组中查找第一个满足isNaN函数的元素的下标
      idx = predicate(array.slice(i, length), isNaN);
      return idx >= 0 ? idx + i: -1;
    }
    for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
      if (array[idx] === item) return idx;
    }
    return -1;
  }
}
export default createIndexOfFinder;