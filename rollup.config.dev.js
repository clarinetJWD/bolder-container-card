import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import { babel } from '@rollup/plugin-babel'
import serve from 'rollup-plugin-serve'
import terser from '@rollup/plugin-terser'
import json from '@rollup/plugin-json'

export default {
  input: ['src/bolder-container-card.ts'],
  output: [{
    dir: '\\\\10.10.82.78\\config\\www\\community\\bolder-container-card-dev',
    format: 'es',
    inlineDynamicImports: true
  },
  {
    dir: './dist',
    format: 'es',
    inlineDynamicImports: true
  }],
  plugins: [
    nodeResolve(),
    typescript(),
    json(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled'
    }),
    terser(),
    serve({
      contentBase: './dist',
      host: '0.0.0.0',
      port: 5002,
      allowCrossOrigin: true,
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })
  ],
  onwarn (warning, warn) {
    if (warning.code === 'THIS_IS_UNDEFINED' && warning.id.includes('@formatjs')) {
      // https://github.com/custom-cards/custom-card-helpers/issues/64
      return
    }
    warn(warning)
  }
}
