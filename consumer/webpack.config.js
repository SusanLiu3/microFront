const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader/dist/index')

module.exports = {
  entry: {
    app_two: './src/index.js'
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
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public/index.html'),
      filename: 'index.html',
      module: ['index'],
      inject: 'body'
    }),
    new ModuleFederationPlugin({
      name: 'app_two',
      remoteType: 'var',
      remotes: {
        main: 'main',
      },
      // shared: { vue: { singleton: true, eager: true }, "webpack": { singleton: true, eager: true } },
    }),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin()
  ],
  devServer: {
    hot: 'only',
    host: '0.0.0.0',
    port:'5555'
  }

}