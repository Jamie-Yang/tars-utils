import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
// import json from 'rollup-plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

import { name, version } from '../package.json';

let banner = `
/*
 * tars-utils
 * https://github.com/Jamie-Yang/tars-utils.git
 * version ${version}
 */
`;

let plugins = [
  resolve(),
  commonjs(),
  // json(),
  babel({
    exclude: 'node_modules/**',
    extensions: ['.js'],
  }),
];

export default [
  {
    input: 'src/index.js',
    output: {
      banner,
      file: `dist/${name}.min.js`,
      // exports: 'named',
      format: 'umd',
      name: 'tars',
      sourcemap: true,
    },
    plugins: plugins.concat([
      terser({
        output: {
          comments(node, comment) {
            if (comment.type === 'comment2') {
              return /tars.+v/i.test(comment.value);
            }
          },
        },
      }),
    ]),
  },
  {
    input: 'src/index.js',
    output: [
      {
        banner,
        exports: 'named',
        file: `dist/${name}.esm.js`,
        format: 'esm',
      },
      {
        banner,
        file: `dist/${name}.js`,
        // exports: 'named',
        format: 'umd',
        name: 'tars',
        sourcemap: true,
      },
    ],
    plugins,
  },
];
