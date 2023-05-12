const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './test/index',
  },
  module: {
    rules: [],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './test/index.html',
    }),
  ],
  devtool: 'source-map',
  devServer: {
    host: '0.0.0.0',
    allowedHosts: 'all',
  },
};
