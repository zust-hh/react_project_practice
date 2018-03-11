# react_project_practice

工程架构：

* wepack配置
* node服务
* 服务端渲染基础

项目架构：

* React
* React-Router配置
* Mobx配置（控制最小精度的变化）
* 服务端渲染优化

业务开发：

* 页面开发
* 登录服务
* 服务端渲染优化

项目部署：

* PM2
* Nginx
* 一键部署

网络优化：

* 合并资源文件，减少HTTP请求
* 压缩资源文件减小请求大小
* 利用缓存机制，尽可能使用缓存减少请求


npm 安裝包列表

* webpack
* webpack-cli
* react
* react-dom
* babel-loader
* babel-core
* babel-preset-es2015
* babel-preset-es2015-loose
* babel-preset-react
* html-webpack-plugin
* rimraf node用於刪除文件
* express
* webpack-dev-server
* cross-env 環境變量相關
* react-hot-loader@next
* axios
* memory-fs 在内存读写文件
* http-proxy-middleware 做代理
* eslint
* babel-eslint
* eslint-config-airbnb
* eslint-config-standard
* eslint-loader
* eslint-plugin-import
* eslint-plugin-jsx-a11y
* eslint-plugin-node
* eslint-plugin-promise
* eslint-plugin-react
* eslint-plugin-standard
* webpack-merge 合并webpack配置
* serve-favicon
* nodemon 服务端脚本

常用配置：

* webpack dev server
* Hot module replacement

目录结构：

```
├── app
│   ├── controller
│   │   ├── test
│   │   │   └── test.jsv
│   ├── extend
│   ├── lib
│   ├── middleware
│   ├── mocks
│   ├── proxy
│   ├── router.js
│   ├── view
│   └── web                               // 前端工程目录
│       ├── asset                         // 存放公共js,css资源
│       ├── framework                     // 前端公用部分，header,footer
│       │   ├── inject
│       │   └── vue                           // 与vue相关的公开代码
│       │       ├── app.js                    // 前后端调用入口, 默认引入componet/directive/filter
│       │       ├── component                 // 组件入口, 可以增加component目录,类似下面的directive
│       │       ├── directive                 // directive 目录,存放各种directive组件
│       │       └── filter                    // filter
│       ├── html                              // 前端页面和webpack构建目录, 也就是webpack打包配置entryDir
│       │   ├── home                          // 每个页面遵循目录名, js文件名, scss文件名, vue文件名相同
│       │   │   ├── home.js                   // 服务器render渲染时, 传入 render('home/home.js', data)
│       │   │   ├── home.scss
│       │   │   ├── home.vue
```
