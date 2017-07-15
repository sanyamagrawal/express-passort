const path = require('path');

const OUTPUT_DIRECTORY = path.join(__dirname, '../../dist');

const webpackDevConfig = {
  entry: './client/index.js',
  output: {
    path: OUTPUT_DIRECTORY,
    filename: 'bundle.js'
  },
  watch: true
};

module.exports = webpackDevConfig;
