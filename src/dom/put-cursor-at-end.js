/**
 * 将输入框光标定位在文端结尾处
 * @param {Element} el 元素
 */
export default function putCursorAtEnd(el) {
  el.focus();

  // If this function exists... (IE 9+)
  if (el.setSelectionRange) {
    // Double the length because Opera is inconsistent about whether a carriage return is one character or two.
    let len = el.value.length * 2;

    // Timeout seems to be required for Blink
    setTimeout(function () {
      el.setSelectionRange(len, len);
    }, 0);
  } else {
    // As a fallback, replace the contents with itself
    el.value = el.value; // eslint-disable-line no-self-assign
  }

  // Scroll to the bottom, in case we're in a tall textarea
  // (Necessary for Firefox and Chrome)
  el.scrollTop = 999999;
}
