const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const path = require('./path.js');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports =  {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.public,
    watchContentBase: true,
    publicPath: '/',
    compress: true,
    historyApiFallback: true,
    open: true,
    hot: true,
    port: 3001,
    clientLogLevel: 'error'
  },
  plugins: [
    new ESLintPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin()
  ],
  target: 'web',
};