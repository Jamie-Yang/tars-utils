/**
 * 平滑滚动
 * @param {object} options 配置项
 * @param {Element|Window} [options.el] 滚动容器元素或window
 * @param {number} [options.from] 起始位置
 * @param {number} options.to 终止位置
 * @param {number} [options.duration] 过渡时间
 * @param {Function} [options.onEnd] 结束回调
 */
export default function scrollTo(options) {
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame =
      window.webkitRequestAnimationFrame ||
      ((callback) => {
        window.setTimeout(callback, 1000 / 60);
      });
  }

  const { el = window, from = 0, to, duration = 500, onEnd } = options;
  const difference = Math.abs(from - to);
  const step = Math.ceil((difference / duration) * 50);

  const scroll = (start, end, step) => {
    if (start === end) {
      onEnd && onEnd();
      return;
    }

    let d = start + step > end ? end : start + step;
    if (start > end) {
      d = start - step < end ? end : start - step;
    }

    if (el === window) {
      window.scrollTo(0, d);
    } else {
      el.scrollTop = d;
    }

    window.requestAnimationFrame(() => scroll(d, end, step));
  };

  scroll(from, to, step);
}
