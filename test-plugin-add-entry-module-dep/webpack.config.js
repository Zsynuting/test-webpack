const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const InjectExternalPlugin = require('./InjectExternalPlugin')
const path = require('path')
const { ModuleFederationPlugin } = webpack.container

const plugins = [
  new HtmlWebpackPlugin({ template: './public/index.html' }),
  new InjectExternalPlugin(),
  new ModuleFederationPlugin({
    name: 'providerApp',
    filename: 'remoteEntry.js',
    exposes: {
      './index': './src/index',
    },
  }),
]

module.exports = {
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'src/index.js'),
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'auto',
  },
  externals: {
    lodash: '_',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins,
  devServer: { port: 3333, hot: true, open: true },
}
