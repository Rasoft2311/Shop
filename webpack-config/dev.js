const path = require('./path.js');

module.exports =  {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.build,
    publicPath: '/',
    compress: true,
    historyApiFallback: true,
    hot: true,
    open: true,
    port: 3000
  },
  target: 'web',
}