import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

import { name, version } from '../package.json';

let banner = `
/*
 * ${name}
 * https://github.com/Jamie-Yang/tars-utils.git
 * version ${version}
 */
`;

let plugins = [babel()];

export default [
  {
    input: 'src/index.js',
    output: [
      {
        banner,
        exports: 'named',
        file: `dist/${name}.esm.js`,
        format: 'esm',
        name: 'tars',
        chunkFileNames: 'internal/[name].js',
      },
      {
        banner,
        file: `dist/${name}.js`,
        exports: 'named',
        format: 'umd',
        name: 'tars',
      },
    ],
    plugins,
  },
  {
    input: 'src/index.js',
    output: {
      banner,
      file: `dist/${name}.min.js`,
      exports: 'named',
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
];
