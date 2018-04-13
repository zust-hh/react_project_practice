const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.base')
// const HTMLPlugin = require('html-webpack-plugin')
module.exports = webpackMerge(baseConfig, {
  // 運行環境
  target: 'node',
  // 入口文件
  entry: {
    app: path.join(__dirname, '../client/server-entry.js')
  },
  externals: Object.keys(require('../package.json').dependencies),
  // 輸出文件夾
  output: {
    filename: 'server-entry.js',
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.API_BASE': '"http://127.0.0.1:3000"'
    })
  ]
  // plugins: [     new HTMLPlugin() // 自動生成html，并引用打包工具 ]
})
