const path = require('path')

module.exports = {
  // mode: 'development',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  externals: {
    a: 'a',
  },
  optimization: {
    sideEffects: false,
  },
}
