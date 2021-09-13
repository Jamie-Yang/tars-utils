/**
 * @param {object} config 配置对象
 * @param {Function} onSuccess 成功回调
 * @param {Function} onError 失败回调
 */
export default function xhr(config, onSuccess, onError) {
  const { url, data, method = 'post', headers = {}, withCredentials } = config;
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
      onSuccess(res);
    } else {
      onError(new Error(xhr.status));
    }
  };

  xhr.onerror = function (e) {
    onError(e);
  };

  xhr.open(method, url, true);

  if (withCredentials) {
    xhr.withCredentials = true;
  }

  xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
  if (headers) {
    for (const key in headers) {
      if (Object.prototype.hasOwnProperty.call(headers, key)) {
        xhr.setRequestHeader(key, headers[key]);
      }
    }
  }

  xhr.send(JSON.stringify(data));
}
