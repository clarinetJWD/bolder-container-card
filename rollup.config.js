import typescript from 'rollup-plugin-typescript2'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import { babel } from '@rollup/plugin-babel'
import terser from '@rollup/plugin-terser'
import json from '@rollup/plugin-json'
import gzipPlugin from 'rollup-plugin-gzip'

export default [
  {
    input: 'src/cards.ts',
    output: {
      format: 'es',
      inlineDynamicImports: true,
      file: './dist/bolder-utility-cards.js'
    },
    plugins: [
      nodeResolve(),
      commonjs(),
      typescript(),
      json(),
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled'
      }),
      terser(),
      gzipPlugin()
    ],
    onwarn (warning, warn) {
      if (warning.code === 'THIS_IS_UNDEFINED' && warning.id.includes('@formatjs')) {
        // https://github.com/custom-cards/custom-card-helpers/issues/64
        return
      }
      warn(warning)
    }
  }
]
