/**
 * 获取URL上指定的查询参数
 *
 * @param {string} name 参数名称
 * @returns {string} 指定参数的值
 */
export const getUrlParam = (name) => {
  let re = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
  let value = '';
  let arrHash = window.location.hash.split('?');
  let arrSearch = window.location.search.substr(1).split('?');

  arrHash.shift();
  let arr = arrSearch[0] !== '' ? arrSearch : arrHash;

  for (let i = 0; i < arr.length; i++) {
    let r = arr[i].match(re);
    if (r !== null && r[2]) {
      value = r[2];
      break;
    }
  }
  return value;
};

/**
 * 获取URL的查询参数对象
 *
 * @param {string} [url] 链接
 * @returns {object} 参数对象
 */
export const getURLParams = (url = window.location.href) =>
  url.match(/([^?=&]+)(=([^&]*))/g).reduce((a, v) => {
    a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1);
    return a;
  }, {});
