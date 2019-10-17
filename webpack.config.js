//webpack配置文件
var path = require('path') 
var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, './src/main.js'), // 入口文件
  output: {
    path: path.join(__dirname, './dist'), // 输出路径
    filename: 'bundle.js' // 指定输出文件的名称
  },
  plugins: [ // 所有webpack  插件的配置节点
    new htmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'), // 指定模板文件路径
      filename: 'index.html' 
    })
  ],
  module: { 
    rules: [ // 第三方模块的匹配规则
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }, 
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }, 
      { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader' }, 
    
      { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' }, 
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.vue$/, use: 'vue-loader' } 
    ]
  },
  resolve: {
    alias: { 
      // "vue$": "vue/dist/vue.js"
    }
  }
}