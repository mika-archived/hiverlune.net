const path = require('path');


module.exports = {
  entry: {
    bundle: path.join(__dirname, 'src', 'main.ts')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/[name].[hash].js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.vue', '.ts', '.js', '.html'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'tslint-loader'
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader'
      }
    ]
  }
};
