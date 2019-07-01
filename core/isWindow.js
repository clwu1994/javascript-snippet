function isWindow(obj) {
  return obj !=null && obj.window === obj;
}
export default isWindow;