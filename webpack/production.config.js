const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge');
const baseConfig = require('./base.config')

module.exports = merge(baseConfig, {
  entry: path.resolve(__dirname, '../src/main.js'),
  output: {
    path: path.resolve(__dirname, '../dist/build'),
    publicPath: '/',
    filename: '[name].js'
  },
  plugins:[
    new webpack.optimize.UglifyJsPlugin()
  ]
})