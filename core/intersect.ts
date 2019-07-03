/**
 * @description 交集
 * @param a 
 * @param b
 */
function intersect(a: any[], b: any[]): any[] {
  let setA: Set<any> = new Set(a);
  let setB: Set<any> = new Set(b) 
  return [...setA].filter((x: any) => setB.has(x))
}
export default intersect;