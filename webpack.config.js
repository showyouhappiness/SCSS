// 翻译的功能  将index.js翻译成main.js

const path = require('path');

module.exports = {
    mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'haha.js',
    path: path.resolve(__dirname, 'dist'),
  },
};