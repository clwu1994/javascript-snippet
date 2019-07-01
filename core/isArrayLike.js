import isWindow from './isWindow';
function isArrayLike(obj) {
  // obj必须有length属性
  var length = !!obj && 'length' in obj && obj.length;
  var typeRes = type(obj);
  // 排除函数和Window对象
  if (typeRes === 'function' || isWindow(obj)) {
    return false;
  }
  return typeRes === "array" || length === 0 ||
  typeof length === "number" && length > 0 && (length - 1) in obj;
}
export default isArrayLike;