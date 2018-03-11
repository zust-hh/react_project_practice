const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.base')

const isDev = process.env.NODE_ENV === 'development'

const config = webpackMerge(baseConfig, {
  // 入口文件
  entry: {
    app: path.join(__dirname, '../client/app.js')
  },
  // 輸出文件夾
  output: {
    filename: '[name].[hash].js'
  },
  plugins: [
    new HTMLPlugin({
      template: path.join(__dirname, '../client/template.html')
    }) // 自動生成html，并引用打包工具
  ]
})

if (isDev) {
  config.entry = {
    app: [
      'react-hot-loader/patch', path.join(__dirname, '../client/app.js')
    ]
  }
  config.devServer = {
    host: '0.0.0.0',
    port: '8888',
    contentBase: path.join(__dirname, '../dist'),
    hot: true,
    overlay: {
      errors: true
    },
    publicPath: '/public/',
    historyApiFallback: {
      index: '/public/index.html'
    }
  }
  config
    .plugins
    .push(new webpack.HotModuleReplacementPlugin())
}

module.exports = config
