const webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.\/js/,
        use: 'babel-loader',
      },
    ],
  },
  optimization: {
    splitChunks: false,
  },
}
