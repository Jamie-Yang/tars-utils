/**
 * 优化图片尺寸和文件大小
 * 不支持Gif格式
 * @param {object|string} image 原始图片，支持File对象和base64字符串
 * @param {number} [quality] 品质，范围为 0 - 1, 仅支持MIME类型为 image/jpeg 或 image/webp
 * @param {object} [options={}] 配置项
 * @param {number} [options.maxWidth=750] 生成图片的最大宽度，若原始图片宽度小于此值，则使用原始图片的宽度
 * @param {string} [options.mimeType] 生成图片的MIME类型
 * @returns {Promise<Blob>} 生成图片 Blob对象
 */
export default function optimizeImage(image, quality = 0.9, { maxWidth = 750, mimeType } = {}) {
  return new Promise((resolve, reject) => {
    if (image instanceof File) {
      const reader = new FileReader();
      reader.onload = function () {
        toBlob(this.result);
      };
      reader.readAsDataURL(image);
    } else if (typeof image === 'string') {
      toBlob(image);
    }

    /**
     * To Blob
     * @param {string} data - Image: Data URL
     * @returns {undefined}
     */
    function toBlob(data) {
      const type = data.match(/data:([^;,]+)/);
      if (Array.isArray(type)) {
        const outputType = mimeType ? mimeType : type[1];

        if (outputType === 'image/gif') {
          return resolve(image);
        }

        const virtualImage = new Image();
        virtualImage.src = data;
        virtualImage.onload = function () {
          let width = this.naturalWidth;
          let height = this.naturalHeight;
          if (width > maxWidth) {
            height = Math.round((maxWidth * height) / width);
            width = maxWidth;
          }
          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          const context = canvas.getContext('2d');
          context.drawImage(this, 0, 0, width, height);
          canvas.toBlob(
            (blob) => {
              resolve(blob);
            },
            mimeType ? mimeType : type[1],
            quality
          );
        };
      } else {
        reject(new Error('[Slug Function] Non-picture type Data URLs'));
      }
    }
  });
}
