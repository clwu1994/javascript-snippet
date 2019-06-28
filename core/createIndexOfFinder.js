function createIndexOfFinder(dir) {
  return function(array, item) {
    var length = array.length;
    var index = dir > 0 ? 0 : length - 1;
    for (; index >= 0 && index < length; index += dir) {
      if (array[index] === item) return index;
    }
    return -1;
  }
}
export default createIndexOfFinder;