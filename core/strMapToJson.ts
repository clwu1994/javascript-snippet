import strMapToObj from "./strMapToObj"
function strMapToJson(strMap: Map<string, any>): string {
  return JSON.stringify(strMapToObj(strMap));
}
export default strMapToJson;