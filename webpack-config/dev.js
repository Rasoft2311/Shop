const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const path = require('./path.js');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports =  {
  entry: [
    require.resolve('webpack-dev-server/client') + '?/',
    require.resolve('webpack/hot/dev-server'),
    `${path.src}/index.js`,
  ].filter(Boolean),
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
    port: 3000,
    injectClient: false,
    clientLogLevel: 'error'
  },
  plugins: [
    new ESLintPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin()
  ],
  target: 'web',
};