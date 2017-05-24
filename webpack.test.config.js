var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: 'mocha-loader!./test/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
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
      },
      {
        test: /spec.js$/,
        use: 'mocha-loader',
        exclude: /node_modules/,
      }
    ]
  },
  devtool: '#source-map'
}

