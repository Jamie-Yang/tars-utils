/**
 * 函数组合
 * 可将 fn1(fn2(fn3(fn4(x)))) 这种嵌套的调用方式
 * 改成 compose(fn1,fn2,fn3,fn4)(x) 的方式调用
 * @param  {...Function} funcs 方法
 * @returns {Function} 组合结果方法
 */
export default function compose(...funcs) {
  if (funcs.length === 0) {
    return (arg) => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(
    (a, b) =>
      (...args) =>
        a(b(...args))
  );
}
