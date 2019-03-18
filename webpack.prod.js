const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackConfig = require("./webpack.base.js");

webpackConfig.module.rules.push({
  test: /\.scss$/,
  use: ExtractTextPlugin.extract({
    use: [
      {
        loader: "css-loader",
        options: {
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
});

webpackConfig.plugins.push(
  new ExtractTextPlugin({
    filename: "css/[name].[hash].css",
    publicPath: "/"
  }),
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
