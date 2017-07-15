const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm

const OUTPUT_DIRECTORY = path.join(process.cwd(), '/dist');

const webpackDevConfig = {
  entry: './client/index.js',
  output: {
    path: `${OUTPUT_DIRECTORY}/assets`,
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  watch: true,
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
      { test: /\.css$/, use: ["style-loader","css-loader"] },
      { test: /\.woff$/, use: 'url-loader?limit=65000&mimetype=application/font-woff&name=fonts/[name].[ext]' },
      { test: /\.woff2$/, use: 'ur-loaderl?limit=65000&mimetype=application/font-woff2&name=fonts/[name].[ext]' },
      { test: /\.[ot]tf$/, use: 'url-loader?limit=65000&mimetype=application/octet-stream&name=fonts/[name].[ext]' },
      { test: /\.eot$/, use: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=fonts/[name].[ext]' }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(process.cwd(), '/client/index.html'),
      filename: `${OUTPUT_DIRECTORY}/index.html`
    })
  ]
};

module.exports = webpackDevConfig;
