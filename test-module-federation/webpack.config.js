const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = webpack.container

/**
 * host app
 */

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new ModuleFederationPlugin({
      remotes: {
        providerApp: 'providerApp@http://localhost:3333/remoteEntry.js',
      },
    }),
  ],
  devServer: {
    port: 4444,
    hot: true,
    open: true,
  },
}
