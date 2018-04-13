const path = require('path')
module.exports = {
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/public/' // 打包的靜態文件前綴文件夾，用於和其他api或cdn區分
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  // 需要import一些非原生js，需要進行loader的操作
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: [path.resolve(__dirname, '../node_modules')]
      }, {
        test: /.jsx$/,
        loader: 'babel-loader'
      }, {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: [path.join(__dirname, '../node_modules')]
      }
    ]
  }
}
