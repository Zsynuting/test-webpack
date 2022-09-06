const webpack = require('webpack')
const fs = require('fs')
const path = require('path')
const { ConcatSource } = webpack.sources

class InjectExternalPlugin {
  apply(compiler) {
    const content = fs.readFileSync(path.resolve(__dirname, './src/lodashddd.js'), 'utf-8')
    compiler.hooks.thisCompilation.tap('InjectExternalPlugin', (compilation) => {
      compilation.hooks.optimizeChunkAssets.tapAsync('InjectExternalPlugin', (chunks, callback) => {
        chunks
          .filter((chunk) => chunk.id === 'main' || chunk.id === 'providerApp')
          .forEach((chunk) => {
            chunk.files.forEach((file) => {
              compilation.assets[file] = new ConcatSource(
                '/** external resource **/',
                content,
                '/** external resource **/',
                '\n;',
                compilation.assets[file],
              )
            })
          })
        callback()
      })
    })
  }
}

module.exports = InjectExternalPlugin
