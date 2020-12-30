import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'import/index.js',
  output: {
    file: 'import/build.js',
    format: 'es'
  },
  plugins: [
    resolve(),
    commonjs({include: 'node_modules/**'}),
  ]
};
