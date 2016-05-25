//var path = require('path');
//var webpack = require('webpack');
//
//module.exports = {
//  devtool: 'cheap-module-eval-source-map',
//  entry: [
//    'webpack-hot-middleware/client',
//    './index'
//  ],
//  output: {
//    path: path.join(__dirname, 'dist'),
//    filename: 'bundle.js',
//    publicPath: '/static/'
//  },
//  plugins: [
//    new webpack.optimize.OccurenceOrderPlugin(),
//    new webpack.HotModuleReplacementPlugin()
//  ],
//  module: {
//    loaders: [
//      {
//        test: /\.js$/,
//        loaders: [ 'babel' ],
//        exclude: /node_modules/,
//        include: __dirname
//      },
//      {
//        test: /\.css?$/,
//        loaders: [ 'style', 'raw' ],
//        include: __dirname
//      }
//    ]
//  }
//};
var webpack = require('webpack');
var path = require('path');
//var HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    //'webpack-dev-server/client?http://localhost:3000',
    //'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    './app/main'

  ],
  output: {
    path: path.resolve(__dirname, './build'),
    publicPath: '/build/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.css','.less']
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015,presets[]=stage-0,presets[]=stage-1,presets[]=stage-2,presets[]=stage-3'],
        include: __dirname
      },
      {test: /\.less$/, loader: "style!css!less", include: __dirname},
      {test:/\.css$/, loader: "style!css", include: __dirname},
      {test: /\.(png|jpg|gif)$/, loader: "url-loader", include: __dirname}
    ]
  },
  plugins: [
    //new HtmlwebpackPlugin({
    //  title: 'BBD',
    //  template:'./dev/index.html', //html模板路径
    //  filename: 'index.html',
    //  inject:true,  //允许插件修改哪些内容，包括head与body
    //  hash:false //为静态资源生成hash值
    //}),//添加我们的插件 会自动生成一个html文件
    //new webpack.DefinePlugin({ //开发模式
    //  "process.env": {
    //    NODE_ENV: JSON.stringify("development") //development,production
    //  }
    //}),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};