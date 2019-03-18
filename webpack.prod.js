const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const PurifyCssPlugin = require('purifycss-webpack');
const webpackConfig = require("./webpack.base.js");

webpackConfig.module.rules.push(
  {
    test: /\.scss$/,
    use: ExtractTextPlugin.extract({
      use: [
        {
          loader: "css-loader",
          options: {
            minimize: true,
            importLoaders: 2
          }
        },
        "postcss-loader",
        {
          loader: "sass-loader",
          options: {
            outputStyle: "expanded"
          }
        }
      ],
      fallback: "style-loader"
    })
  },
  {
    test: /\.(jpg|png|gif)$/,
    loader: "file-loader?name=/assets/img/[name].[ext]"
  },
  {
    test: /\.(svg|eot|ttf|woff|woff2)$/,
    loader: "file-loader?name=/fonts/[name].[ext]"
  }
);

webpackConfig.plugins.push(
  new ExtractTextPlugin({
    filename: "css/[name].[contenthash].css",
    publicPath: "/"
  }),
  // new PurifyCssPlugin({
  //   moduleExtensions: ['.vue'],
  //   paths: glob.sync(path.join(__dirname, 'src/**/*.{html|vue}')),
  //   purifyOptions: {
  //     minify: true,
  //   }
  // }),
  new HtmlWebpackPlugin({
    inject: true,
    template: path.join(__dirname, "src", "index.html"),
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
  })
);
module.exports = webpackConfig;
