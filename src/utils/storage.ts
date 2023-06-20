// localstorage模块封装

export default {
  /**
   *	模块名称
   * @param key {string} 参数名称
   * @param value	{any} 值
   */
  set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  get(key: string) {
    localStorage.getItem(key);
  },
  remove(key: string) {
    localStorage.removeItem(key);
  },
  clear() {
    localStorage.clear();
  }
};
