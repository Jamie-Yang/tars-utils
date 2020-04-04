import randomColor from '../random/random-color';

/**
 * 框出所有元素，检测布局
 */
export default function outlineElements() {
  document.querySelectorAll('*').forEach((el) => {
    el.style.outline = '1px solid ' + randomColor;
  });
}
