const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackConfug = require('./webpack.base.js');

webpackConfug.module.rules.push(
  {
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader'
    ]
  },
  {
    test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)$/,
    loader: 'file-loader'
  }
);

webpackConfug.plugins = [
  new HtmlWebpackPlugin({
    inject: true,
    template: path.join(__dirname, 'src', 'index.html')
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
  }),
]

webpackConfug.devServer = {
  port: 8080,
  host: 'localhost',
  historyApiFallback: true,
  contentBase: './src',
  open: true
};

module.exports = webpackConfug;
