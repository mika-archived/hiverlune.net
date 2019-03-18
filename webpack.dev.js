const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackConfig = require("./webpack.base.js");

webpackConfig.module.rules.push(
  {
    test: /\.scss$/,
    use: ["style-loader", "css-loader", "sass-loader"]
  },
  {
    test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)$/,
    loader: "file-loader"
  }
);

webpackConfig.plugins.push(
  new HtmlWebpackPlugin({
    inject: true,
    template: path.join(__dirname, "src", "index.html")
  })
);

webpackConfig.devServer = {
  port: 8080,
  host: "localhost",
  historyApiFallback: true,
  contentBase: "./src"
  // open: true
};

module.exports = webpackConfig;
