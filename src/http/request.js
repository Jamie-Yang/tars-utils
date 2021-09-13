import xhr from './xhr';

/**
 * @param {object} config 配置对象
 * @returns {Promise} 请求结果
 */
export default function request(config) {
  return new Promise((resolve, reject) => {
    xhr(config, resolve, reject);
  });
}
