const webpack = require('webpack');
const path = require('./path.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: `${path.src}/index.js`,
  module: {
    rules: [
      {
        test: /\.m?jsx?$/i,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name].[contenthash][ext]'
        }
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]'
        }
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: `${path.public}/assets`
        }
      ]
    }),
    new HtmlWebpackPlugin({
      template: `${path.public}/index.html`,
      filename: 'index.html',
      templateParameters: {
        title: 'React App Skeleton'
      }
    }),
  ],
  resolve: {
    alias: {
      '@assets': `${path.src}/assets`
    }
  },
};