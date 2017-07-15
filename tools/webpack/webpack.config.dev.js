const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const OUTPUT_DIRECTORY = path.join(process.cwd(), '/dist');
console.log('OUTPUT_DIRECTORY', OUTPUT_DIRECTORY);
const webpackDevConfig = {
  entry: './client/index.js',
  output: {
    path: `${OUTPUT_DIRECTORY}/assets`,
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  watch: true,
  module: {
    rules: [{
      test: /\.css$/,
      use: ["style-loader","css-loader"]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: `${OUTPUT_DIRECTORY}/index.html`
    })
  ]
};

module.exports = webpackDevConfig;
