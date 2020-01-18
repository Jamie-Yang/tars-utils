/**
 *
 * 获取URL的查询参数对象
 *
 * @param {string} [url] 链接
 * @param {string} [section] 位置 search\hash
 * @returns {object} 参数对象
 */
const getURLParams = (url = window.location.href, section = 'search') =>
  url.match(/([^?=&]+)(=([^&]*))/g).reduce((a, v) => {
    a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1);
    return a;
  }, {});

/**
 * 获取URL上指定的查询参数
 *
 * @param {string} key 参数名
 * @returns {string} 指定参数的值
 */
const getUrlParam = (key) => {
  const re = new RegExp('([?|&])' + key + '=([^&]*)(&|$)');
  const arrHash = window.location.hash.split('?');
  const arrSearch = window.location.search.substr(1).split('?');
  let value = '';

  arrHash.shift();
  const arr = arrSearch[0] !== '' ? arrSearch : arrHash;

  for (let i = 0; i < arr.length; i++) {
    const r = arr[i].match(re);
    if (r !== null && r[2]) {
      value = r[2];
      break;
    }
  }
  return value;
};

/**
 * setUrlParam
 *
 * @see https://stackoverflow.com/questions/5999118/add-or-update-query-string-parameter
 * @param {string} key 参数名
 * @param {string} value 参数值
 * @param {string} [url] URL链接
 * @returns {string} 处理后的完整URL
 */
const setUrlParam = (key, value, url = window.location.href) => {
  const re = new RegExp('([?|&])' + key + '=.*?(&|#|$)', 'i');

  if (url.match(re)) {
    return url.replace(re, '$1' + key + '=' + encodeURIComponent(value) + '$2');
  } else {
    let hash = '';
    if (url.indexOf('#') !== -1) {
      hash = url.replace(/.*#/, '#');
      url.replace(/#.*/, '');
    }
    let separator = url.indexOf('?') !== -1 ? '&' : '?';
    return url + separator + key + '=' + encodeURIComponent(value) + hash;
  }
};

const deleteUrlParam = (param, url = window.location.href) => {
  // prefer to use l.search if you have a location/link object
  let urlparts = url.split('?');
  if (urlparts.length >= 2) {
    let prefix = encodeURIComponent(param) + '=';
    let pars = urlparts[1].split(/[&;]/g);

    // reverse iteration as may be destructive
    for (let i = pars.length; i-- > 0; ) {
      // idiom for string.startsWith
      if (pars[i].lastIndexOf(prefix, 0) !== -1) {
        pars.splice(i, 1);
      }
    }
    return urlparts[0] + (pars.length > 0 ? '?' + pars.join('&') : '');
  } else {
    return url;
  }
};

/**
 * 对象序列化
 * 支持一层对象
 *
 * @param {JSON} obj JSON对象
 * @returns {string} 序列化查询参数串
 */
const stringifyQueryString = (obj) => {
  if (!obj) return '';
  let pairs = [];

  for (let key in obj) {
    if ({}.hasOwnProperty.call(obj, key)) {
      let value = obj[key];

      if (value instanceof Array) {
        pairs = pairs.concat(value.map((v, i) => `${key}[${i}]=${v}`));
        continue;
      }

      pairs.push(`${key}=${obj[key]}`);
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
function parseQueryString(url = window.location.href) {
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

export {
  getURLParams,
  getUrlParam,
  setUrlParam,
  deleteUrlParam,
  stringifyQueryString,
  parseQueryString,
};
