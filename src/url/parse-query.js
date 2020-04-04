/**
 * url参数转对象
 *
 * @param  {string} [url] default: window.location.href
 * @returns {object} 结果对象
 */
export default function parseQuery(url = window.location.href) {
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
