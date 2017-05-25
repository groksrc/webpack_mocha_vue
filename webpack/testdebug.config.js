const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./base.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const entry = path.resolve(__dirname, '../test/index.js')

module.exports = merge(baseConfig, {
  entry: `mocha-loader!${entry}`,
  output: {
    path: path.resolve(__dirname, '../dist/testdebug'),
    publicPath: '/',
    filename: 'test.build.js'
  },
  devtool: '#source-map',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html'
    })
  ]
})
