const webpack = require('webpack')

class InjectExternalPlugin {
  apply(compiler) {
    const additionalEntry = './src/lodashddd.js'

    new webpack.EntryPlugin(compiler.context, additionalEntry, {
      name: undefined,
    }).apply(compiler)
  }
}

module.exports = InjectExternalPlugin
