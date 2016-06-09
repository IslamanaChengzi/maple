var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry: {
    'main': './app/main'
  },
  output: {
    path: path.resolve(__dirname, './build'),
    publicPath: '/build/',
    filename: 'bundle.[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.css','.less', '.json']
  },
  externals: {
    // 申明为外部依赖并指定别名
    "react": "React",
    "react-dom": "ReactDOM"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015,presets[]=stage-0,presets[]=stage-1,presets[]=stage-2,presets[]=stage-3'],
        include: __dirname
      },
      { test: /\.json$/, loader: "json" },
      { test: /\.less$/, loader: ExtractTextPlugin.extract("style-loader","css!less") },
      { test: /\.css$/, loader:  ExtractTextPlugin.extract("style-loader","css-loader") }
      //{ test: /\.(png|jpg|gif)$/, loader: "url-loader", include: __dirname}
    ]
  },
  plugins: [
    //压缩插件,编译的速度会明显变慢
    //new webpack.optimize.UglifyJsPlugin({
    //  compress: {
    //    warnings: false
    //  }
    //}),
    new webpack.DefinePlugin({
      "process.env": {
        BROWSER: JSON.stringify(true)
      }
    }),
    new ExtractTextPlugin("style.css", {
      allChunks: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};