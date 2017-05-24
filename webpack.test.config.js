var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './test/index.js',
  output: {
    path: path.resolve(__dirname, './dist/test'),
    publicPath: '/dist/test',
    filename: 'test.build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.jpg|.png|.gif|.svg/,
        loader: 'file-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  devtool: '#source-map',
  target: 'node'
}

