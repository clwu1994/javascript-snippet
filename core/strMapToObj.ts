import { obj } from '../global';
function strMapToObj(strMap: Map<string, any>): obj {
  let obj = Object.create(null);
  for (let [k, v] of strMap) {
    obj[k] = v;
  }
  return obj;
}
export default strMapToObj;