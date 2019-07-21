import { objToStrMap } from ".";

function jsonToStrMap(jsonStr: string): Map<string, any> {
  return objToStrMap(JSON.parse(jsonStr));
}

export default jsonToStrMap;