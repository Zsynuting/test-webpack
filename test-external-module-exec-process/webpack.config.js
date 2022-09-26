const path = require('path')

module.exports = {
  mode: 'development',
  devtool: false,
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  externals: {
    // a: 'a',
  },
}
