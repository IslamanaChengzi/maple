# Maple 

## React Maple 1.0版本

```
$ npm install 安装插件
$ webpack     生成js,css文件
```
#####普通开发模式：
```
$ webpack -w
$ npm run test 页面刷新模式
浏览器输入：localhost:4000
```
#####HOT开发模式：
```
$ webpack -w
$ npm run watch
浏览器输入：localhost:4000
```

####目录结构：
```
..
├── app                     # 应用目录
│   ├── actions             # redux的action部分
│   ├── lib                 # 公共API目录
│   ├── components          # 组件视图目录
│   ├── constants           # ActionTypes目录
│   ├── containers          # 容器视图目录 
│   ├── reducers            # redux的reducer部分
│   ├── i18n-client.js      # 客户端语言库渲染配置
│   ├── i18n-server.js      # 服务端语言库渲染配置
│   ├── main.js             # 客户端渲染配置
│   └── router.js           # 前端路由同构文件
├── build                   # webpack 输出目录
├── locales                 # 语言库
├── routes                  # 后端路由配置
│   ├── interfaces.js       # 数据接口
│   └── locales.js          # 语言库接口
├── views                   # 视图模板目录
│   └── index.html          # 视图模板
├── index.js                # 应用入口
├── server.js               # 服务端渲染配置
├── webpack.config.js       # webpack 配置文件
```
