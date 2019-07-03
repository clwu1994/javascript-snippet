// function dedupe(array) {
//   return Array.from(new Set(array))
// }
/**
 * @description 数组去重
 * @param {*} arr 
 */
function dedupe(arr) {
  let unique = [...new Set(arr)];
  return unique;
}
export default dedupe;