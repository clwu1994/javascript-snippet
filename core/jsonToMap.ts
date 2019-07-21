function jsonToMap(jsonStr: string): Map<any, any> {
  return new Map(JSON.parse(jsonStr));
}
export default jsonToMap;