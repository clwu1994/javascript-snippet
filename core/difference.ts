function difference(a: any[], b: any[]): any[] {
  let setA: Set<any> = new Set(a);
  let setB: Set<any> = new Set(b);
  return [...setA].filter(x => !setB.has(x));
}
export default difference;