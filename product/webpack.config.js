const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const { VueLoaderPlugin } = require('vue-loader/dist/index')

const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'dist')
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.js$/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader'] // MiniCssExtractPlugin.loader MiniCssExtractPlugin.loader,
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'public/index.html'),
      inject: 'body'
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    // 模块联邦
    new ModuleFederationPlugin({
      name: "main", // 提供者的名字
      filename: 'remoteEntry.js',
      library: { type: "var", name: "main" },
      // 暴漏出来的模块
      exposes: {
        './myButton': './src/components/Button.vue',
        './twoLargeNumberAdd':'./src/components/index.js'
      },
      shared: { vue: { singleton: true, eager: true }, webpack: { singleton: true, eager: true } },
    }),
    // new MiniCssExtractPlugin()
  ],
  devServer: {
    hot: "only",
    host: '0.0.0.0',
    port:'3333'
  }
}