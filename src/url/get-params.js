import removeHash from './remove-hash';

/**
 * 获取 URL 参数对象
 *
 * @param {string} [query] 参数字段
 * @returns {object} 参数对象
 */
export default function getParams(query) {
  const query = removeHash(query);

  return (query.match(/([^?=&]+)(=([^&]*))/g) || []).reduce((a, v) => {
    const equalStart = v.indexOf('=');
    a[v.slice(0, equalStart)] = v.slice(equalStart + 1);
    return a;
  }, {});
}
