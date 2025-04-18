import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/zap.js',
        format: 'umd',
        name: 'Zap',
        sourcemap: true
      },
      {
        file: 'dist/zap.min.js',
        format: 'umd',
        name: 'Zap',
        plugins: [terser()],
        sourcemap: true
      },
      {
        file: 'dist/zap.esm.js',
        format: 'es',
        sourcemap: true
      }
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      })
    ]
  }
]; 