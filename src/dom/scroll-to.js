/**
 * 平滑滚动
 *
 * @param {Element|Window} el 滚动容器
 * @param {number} from 起始量
 * @param {number} to 终止量
 * @param {number} duration 过渡时间
 * @param {Function} endCallback 结束回调
 */
// eslint-disable-next-line max-params
export default function scrollTo(el, from = 0, to, duration = 500, endCallback) {
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame =
      window.webkitRequestAnimationFrame ||
      ((callback) => {
        window.setTimeout(callback, 1000 / 60);
      });
  }
  const difference = Math.abs(from - to);
  const step = Math.ceil((difference / duration) * 50);

  const scroll = (start, end, step) => {
    if (start === end) {
      endCallback && endCallback();
      return;
    }

    let d = start + step > end ? end : start + step;
    if (start > end) {
      d = start - step < end ? end : start - step;
    }

    if (el === window) {
      window.scrollTo(d, d);
    } else {
      el.scrollTop = d;
    }
    window.requestAnimationFrame(() => scroll(d, end, step));
  };
  scroll(from, to, step);
}
