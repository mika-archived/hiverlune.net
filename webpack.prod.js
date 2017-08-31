const glob = require('glob');
const path = require('path');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PurifyCssPlugin = require('purifycss-webpack');
const webpackConfug = require('./webpack.base.js');

webpackConfug.module.rules.push(
  {
    test: /\.scss$/,
    use: ExtractTextPlugin.extract({
      use: [
        {
          loader: 'css-loader',
          options: {
            minimize: true,
            importLoaders: 2
          }
        },
        'postcss-loader',
        {
          loader: 'sass-loader',
          options: {
            outputStyle: 'expanded'
          }
        }
      ],
      fallback: 'style-loader'
    })
  },
  {
    test: /\.(jpg|png|gif)$/,
    loader: 'file-loader?name=assets/img/[name].[ext]'
  },
  {
    test: /\.(svg|eot|ttf|woff|woff2)$/,
    loader: 'file-loader?name=fonts/[name].[ext]'
  }
);

webpackConfug.plugins = [
  new ExtractTextPlugin({
    filename: 'css/[name].[contenthash].css',
  }),
  new PurifyCssPlugin({
    moduleExtensions: ['.vue'],
    paths: glob.sync(path.join(__dirname, 'src/**/*.{html|vue}')),
    purifyOptions: {
      minify: true,
    }
  }),
  new HtmlWebpackPlugin({
    inject: true,
    template: path.join(__dirname, 'src', 'index.html'),
    minify: {
      collapseWhitespace: true,
      keepClosingSlash: true,
      minifyCSS: true,
      minifyJS: true,
      minifyURLs: true,
      removeComments: true,
      removeRedundantAttributes: true,
      removeStyleLinkTypeAttributes: true,
      useShortDoctype: true
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    minimize: true
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  }),
]
module.exports = webpackConfug;
