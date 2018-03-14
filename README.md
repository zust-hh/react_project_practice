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
* react-router (包含react-router-native 和 react-router-dom)
* react-router-dom
* babel-loader
* babel-core
* babel-preset-es2015
* babel-preset-es2015-loose
* babel-preset-react
* babel-preset-stage-1
* babel-plugin-transform-decorators-legacy
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
* mobx
* mobx-react
* prop-types
* body-parser 转化请求body
* express-session
* query-string
* react-async-bootstrapper
* ejs-compiled-loader
* ejs
* serialize-javascript 序列化javascript对象
* react-helmet 在react jsx中定制html头部 优化SEO

常用配置：

* webpack dev server
* Hot module replacement

目录结构：

```
├── build
├── client
|   ├—— views      // 存放项目功能模块页面，根据路由配置分割子级目录
|   ├── config     // 配置目录
|   ├── store      // 存放数据获取的封装
|   ├── components      // 存放非业务组件，或公用组件
├── server
├── .babelrc
├── .editconfig
├── .eslintrc
├── .gitignore
├── favicon.ico
├── nodemon.json
├── package-lock.json
├── package.json
└── README.md
```
