function mapToArrayJson(map: Map<any, any>): string {
  return JSON.stringify([...map]);
}
export default mapToArrayJson;