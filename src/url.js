/**
 * 获取URL参数对象
 *
 * @param {string} [query] 参数字段
 * @returns {object} 参数对象
 */
const getParams = (query) =>
  (query.match(/([^?=&]+)(=([^&]*))/g) || []).reduce((a, v) => {
    a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1);
    return a;
  }, {});

/**
 * 获取URL search 参数对象
 *
 * @param {string} [url] 链接
 * @returns {object} 参数对象
 */
const getSearchParams = (url = window.location.href) => {
  return getParams(new URL(url).search);
};

/**
 * 获取URL hash 参数对象
 *
 * @param {string} [url] 链接
 * @returns {object} 参数对象
 */
const getHashParams = (url = window.location.href) => {
  return getParams(new URL(url).hash);
};

/**
 * 获取URL search 指定的查询参数
 *
 * @param {string} key 参数名
 * @param {string} [url] 链接
 * @returns {string} 指定参数的值
 */
const getSearchParam = (key, url = window.location.href) => {
  return getSearchParams(url)[key];
};

/**
 * 获取URL hash 指定的查询参数
 *
 * @param {string} key 参数名
 * @param {string} [url] 链接
 * @returns {string} 指定参数的值
 */
const getHashParam = (key, url = window.location.href) => {
  return getHashParams(url)[key];
};

/**
 * 对象序列化
 * 支持一层对象
 *
 * @param {JSON} obj JSON对象
 * @returns {string} 序列化查询参数串
 */
const stringifyQuery = (obj) => {
  if (!obj) return '';
  let pairs = [];

  for (let key in obj) {
    if ({}.hasOwnProperty.call(obj, key)) {
      let value = obj[key];

      if (value instanceof Array) {
        pairs = pairs.concat(
          value.map((v, i) => `${encodeURIComponent(key)}[${i}]=${encodeURIComponent(v)}`)
        );
        continue;
      }
      pairs.push(`${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`);
    }
  }
  return pairs.join('&');
};

/**
 * url参数转对象
 *
 * @param  {string} [url] default: window.location.href
 * @returns {object} 结果对象
 */
function parseQuery(url = window.location.href) {
  if (url.indexOf('?') === -1) {
    return {};
  }
  let search = url[0] === '?' ? url.substr(1) : url.substring(url.lastIndexOf('?') + 1);
  if (search === '') {
    return {};
  }
  search = search.split('&');
  let query = {};
  for (let i = 0; i < search.length; i++) {
    let pair = search[i].split('=');
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  }
  return query;
}

export { getSearchParams, getSearchParam, getHashParams, getHashParam, stringifyQuery, parseQuery };
