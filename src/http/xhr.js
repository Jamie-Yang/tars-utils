/**
 * @param {object} config 配置对象
 * @param {Function} success 成功回调
 * @param {Function} fail 失败回调
 */
export default function xhr(config, success = () => {}, fail = () => {}) {
  const { url, data, method = 'post', headers = {}, responseType = 'json', withCredentials } = config;
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) {
      return;
    }

    if (xhr.status >= 200 && xhr.status < 300) {
      let res = {};
      try {
        res = JSON.parse(xhr.response);
      } catch (e) {}
      success(res);
    } else {
      fail(new Error(xhr.status));
    }
  };

  xhr.onerror = function (e) {
    fail(e);
  };

  xhr.open(method, url, true);

  if (withCredentials) {
    xhr.withCredentials = true;
  }

  switch (responseType) {
    case 'json':
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      break;

    default:
      xhr.setRequestHeader('Accept', '*/*');
  }

  xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
  if (headers) {
    for (const key in headers) {
      if (Object.hasOwn(headers, key)) {
        xhr.setRequestHeader(key, headers[key]);
      }
    }
  }

  xhr.send(JSON.stringify(data));
}
