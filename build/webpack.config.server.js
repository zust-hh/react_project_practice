const path = require('path')
// const HTMLPlugin = require('html-webpack-plugin')

module.exports = {
    // 運行環境
    target: 'node',
    // 入口文件
    entry: {
        app: path.join(__dirname, '../client/server-entry.js')
    },
    // 輸出文件夾
    output: {
        filename: 'server-entry.js',
        path: path.join(__dirname, '../dist'),
        publicPath: '/public/', // 打包的靜態文件前綴文件夾，用於和其他api或cdn區分
        libraryTarget: 'commonjs2',
    },
    // 需要import一些非原生js，需要進行loader的操作
    module: {
        rules: [
            {
                test: /.jsx$/,
                loader: 'babel-loader'
            },
            {
                test: /.js$/,
                loader: 'babel-loader',
                exclude: [
                    path.join(__dirname, '../node_modules')
                ]
            }
        ]
    },
    // plugins: [
    //     new HTMLPlugin() // 自動生成html，并引用打包工具
    // ]
}