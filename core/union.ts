/**
 * @description 并集
 * @param {*} a 
 * @param {*} b 
 */
function union(a: any[], b: any[]): any[] {
  let set = new Set([...a, ...b]);
  return Array.from(set)
}
export default union;