## 简介

> TARS: 取自电影《星际穿越》中智能机器人的角色名。

tars-utils 是一个前端常用工具方法库，整理了在前端项目里高频使用的 utils 方法，所有方法均以简洁易读的 es2015+ 语法实现。

欢迎直接引用本库，也欢迎查看并选用本项目里个别方法的实现。

## 文档

TODO

## 示例

```js
const chunk = tars.chunk([1, 2, 3, 4], 2); // => [[1, 2], [3, 4]]

const hashParams = tars.getHashParams('https://g.com#a=1&b=2'); // => { a:1, b:2 }
```

## 安装

[![tars-utils](https://nodei.co/npm/tars-utils.png)](https://npmjs.org/package/tars-utils)

### 使用 npm 安装

```bash
npm install tars-utils --save
```

```js
import tars from 'tars-utils';
```

单个功能导入，有利于打包工具进行 TreeShaking：

```js
import { randomColor } from 'tars';
```

### HTML 引入

```html
<script type="text/javascript" src="tars-utils.min.js"></script>
```

使用 `tars` 为全局变量

```html
<script type="text/javascript">
  tars.isIOS(); // => true or false
</script>
```

## 下载

- [tars-utils.js](https://raw.githubusercontent.com/Jamie-Yang/tars-utils//master/dist/tars-utils.js)
- [tars-utils.min.js](https://raw.githubusercontent.com/Jamie-Yang/tars-utils//master/dist/tars-utils.min.js) , [source map](https://raw.githubusercontent.com/Jamie-Yang/tars-utils//master/dist/tars-utils.min.js.map)

## 开源协议

MIT License
